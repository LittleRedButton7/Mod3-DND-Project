class AuthenticationController < ApplicationController
    
    skip_before_action :authenticate, only: :login

    def login 
        @user = User.find_by(username: params[:username])

        if !@user && @user.authenticate(params[:password])
            render json: {error: "Invalid Credentials"}, status: :unauthorized
        else
            payload = {user_id: @user.id}
            secret = 'dragon'
            token = JWT.encode payload, secret

            render json: {
                token: token,
                username: @user.username,
            }
        end
    end
end
