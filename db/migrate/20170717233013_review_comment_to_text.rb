class ReviewCommentToText < ActiveRecord::Migration
  def change
    rename_column :reviews, :comment, :text
    rename_column :reviews, :rating, :overall_rating
  end
end
