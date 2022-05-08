module.exports = mongoose => {
    const Scrapping = mongoose.model(
      "scrappings",
      mongoose.Schema(
        {
            localisation_link : String,
            pmr_access_link : String,
            deaf_access_link : String,
            blind_access_link : String,
            keyword_access_link : String,
            datestart_access_link : String,
            zipcode_access_link : String 
        }
        )
      );
      return Scrapping;
};