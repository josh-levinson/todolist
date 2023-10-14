class RenameCompleteToCompleted < ActiveRecord::Migration[7.1]
  def change
    rename_column :todos, :complete, :completed
  end
end
