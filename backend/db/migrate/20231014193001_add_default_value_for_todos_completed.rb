class AddDefaultValueForTodosCompleted < ActiveRecord::Migration[7.1]
  def change
    change_column_default :todos, :completed, false
  end
end
