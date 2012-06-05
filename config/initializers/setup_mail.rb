ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "NV['GMAIL_SMTP_USER']",
  :user_name            => "test31081990",
  :password             => "31081990",
  :authentication       => "plain",
  :enable_starttls_auto => true
}