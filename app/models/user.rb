class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :reviews

  attr_reader :password

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "default_avatar.png"
  
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end


  private

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end


  def ensure_session_token
    self.session_token ||= generate_session_token
  end

end
