require 'test_helper'

class FmsControllerTest < ActionController::TestCase
  setup do
    @fm = fms(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:fms)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create fm" do
    assert_difference('Fm.count') do
      post :create, fm: { comment: @fm.comment, name: @fm.name, size: @fm.size, string: @fm.string }
    end

    assert_redirected_to fm_path(assigns(:fm))
  end

  test "should show fm" do
    get :show, id: @fm
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @fm
    assert_response :success
  end

  test "should update fm" do
    put :update, id: @fm, fm: { comment: @fm.comment, name: @fm.name, size: @fm.size, string: @fm.string }
    assert_redirected_to fm_path(assigns(:fm))
  end

  test "should destroy fm" do
    assert_difference('Fm.count', -1) do
      delete :destroy, id: @fm
    end

    assert_redirected_to fms_path
  end
end
