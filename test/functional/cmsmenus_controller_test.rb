require 'test_helper'

class CmsmenusControllerTest < ActionController::TestCase
  setup do
    @cmsmenu = cmsmenus(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:cmsmenus)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create cmsmenu" do
    assert_difference('Cmsmenu.count') do
      post :create, cmsmenu: { cmsmenu_id: @cmsmenu.cmsmenu_id, id: @cmsmenu.id, title: @cmsmenu.title, url: @cmsmenu.url }
    end

    assert_redirected_to cmsmenu_path(assigns(:cmsmenu))
  end

  test "should show cmsmenu" do
    get :show, id: @cmsmenu
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @cmsmenu
    assert_response :success
  end

  test "should update cmsmenu" do
    put :update, id: @cmsmenu, cmsmenu: { cmsmenu_id: @cmsmenu.cmsmenu_id, id: @cmsmenu.id, title: @cmsmenu.title, url: @cmsmenu.url }
    assert_redirected_to cmsmenu_path(assigns(:cmsmenu))
  end

  test "should destroy cmsmenu" do
    assert_difference('Cmsmenu.count', -1) do
      delete :destroy, id: @cmsmenu
    end

    assert_redirected_to cmsmenus_path
  end
end
