class Bars < ActiveRecord::Migration
  def change
    create_table :bars do |t|
      t.string :name
      t.string :url
      t.string :address
    end
  end
end
