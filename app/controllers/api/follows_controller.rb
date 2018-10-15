class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.user_id = current_user.id
    @follow.save
  end

  def index
    @follows = Follow.where(follower_id: current_user.id)
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
  end

  private
  def follow_params
    params.require(:follow).permit(:followee_id, :followee_type, :follower_id)
  end
end
