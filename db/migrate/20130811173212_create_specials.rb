class CreateSpecials < ActiveRecord::Migration
  def change
    create_table :specials do |t|
      t.string :special
      t.belongs_to :bar
    end
  end
end
