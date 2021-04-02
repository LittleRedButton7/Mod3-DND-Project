class CreateSavedMonsters < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_monsters do |t|
      t.string :name
      t.integer :armor_class
      t.integer :hit_points
      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :intelligence
      t.integer :wisdom
      t.integer :charisma    

      t.timestamps
    end
  end
end
