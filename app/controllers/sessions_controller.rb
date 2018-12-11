class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.from_omniauth(request.env["omniauth.auth"])

    if user.valid?
      session[:user_id] = user.id
      redirect_to request.env['omniauth.origin']
    end
  end

  def show
		@repositories = Github.repos.list user: 'asifbshaikh'  
		# @repositories.each do |repo|
		# 	@name = repo.name
		# 	puts "#{@name}"
		# end	
		if @repositories.length > 0
		 render :json => {:name => @repositories}
		end
  end

  def destroy
    reset_session
    redirect_to request.referer
  end
end
