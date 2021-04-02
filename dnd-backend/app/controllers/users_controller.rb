class UsersController < ApplicationController
    
    skip_before_action :authenticate, only: :create
    
    def index 
        @users = User.all 

        render json: {users: @users, user: @user}
    end
    
    def create 
        @user = User.create({
            username: params[:username],
            password: params[:password],
        })
        
        render json: {user: @user}, status: :created
    end

    def profile
        render json: {
            username: @user.username,
            savedCharacters: @user.savedCharacters,
            savedMonsters: @user.savedMonsters,
        }
    end

end

