class SavedMonstersController < ApplicationController

    skip_before_action :authenticate, only: [:index, :create]

    def index
        @savedMonsters = SavedMonster.all

        render json: @savedMonsters
    end

    def create
        @monster = SavedMonster.create({
            name: params[:name],
            armor_class: params[:armor_class],
            hit_points: params[:hit_points],
            strength: params[:strength],
            dexterity: params[:dexterity],
            constitution: params[:constitution],
            intelligence: params[:intelligence],
            wisdom: params[:wisdom],
            charisma: params[:charisma],

        })
        
        render json: {monster: @monster}, status: :created
    end

end
