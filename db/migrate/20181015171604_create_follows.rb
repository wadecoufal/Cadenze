class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :followee_id, null: false
      t.string :followee_type, null: false

      t.timestamps
    end

    add_index :follows, [:followee_id, :follower_id, :followee_type], unique: true
  end
end
