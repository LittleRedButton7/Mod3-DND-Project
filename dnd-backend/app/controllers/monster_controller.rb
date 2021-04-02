class MonsterController < ApplicationController
  def index
    response = RestClient.get ("")
    result = JSON.parse (response)
    api_response = result[""]
    render json: api_response
  end
end
