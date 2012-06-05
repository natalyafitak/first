require 'test_helper'

class File1sControllerTest < ActionController::TestCase
  setup do
    @file1 = file1s(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:file1s)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create file1" do
    assert_difference('File1.count') do
      post :create, file1: { folder_id: @file1.folder_id, id: @file1.id, name: @file1.name, path: @file1.path, type: @file1.type }
    end

    assert_redirected_to file1_path(assigns(:file1))
  end

  test "should show file1" do
    get :show, id: @file1
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @file1
    assert_response :success
  end

  test "should update file1" do
    put :update, id: @file1, file1: { folder_id: @file1.folder_id, id: @file1.id, name: @file1.name, path: @file1.path, type: @file1.type }
    assert_redirected_to file1_path(assigns(:file1))
  end

  test "should destroy file1" do
    assert_difference('File1.count', -1) do
      delete :destroy, id: @file1
    end

    assert_redirected_to file1s_path
  end
end
