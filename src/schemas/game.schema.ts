import type Platforms from "./platforms.schema";
enum ESRBRatingSlug {
  Everyone = "everyone",
  Everyone10plus = "everyone-10-plus",
  Teen = "teen",
  Mature = "mature",
  AdultsOnly = "adults-only",
  RatingPending = "rating-pending",
}
enum ESRBRatingName {
  Everyone = "Everyone",
  Everyone10plus = "Everyone 10+",
  Teen = "Teen",
  Mature = "Mature",
  AdultsOnly = "Adults Only",
  RatingPending = "Rating Pending",
}

type Game = {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba?: boolean;
  background_image?: string;
  rating: number;
  rating_top?: number;
  ratings?: any;
  ratings_count?: number;
  reviews_text_count?: string;
  added?: number;
  added_by_status?: any;
  metacritic?: number;
  playtime?: number; // in hours
  suggestions_count?: number;
  updated?: Date;
  esrb_rating?: { id: number; slug: ESRBRatingSlug; name: ESRBRatingName };
  platforms: Platforms;
};

export default Game;
