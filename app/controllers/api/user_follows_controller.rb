class Api::UserFollowsController < ApplicationController
  def create
    user_follow = UserFollow.new(user_follow_params)
    user_follow.follower_id = current_user.id
    user_follow.save!
    @user = current_user
    render 'api/users/show'
  end

  def destroy
    user_follow = UserFollow.find_by(follower_id: current_user.id, followee_id: params[:unfollow_user_id])
    user_follow.destroy
    @user = current_user
    render 'api/users/show'
  end

  private
  def user_follow_params
    params.require(:user_follow).permit(:followee_id)
  end
end
