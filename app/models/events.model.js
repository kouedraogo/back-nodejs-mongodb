module.exports = mongoose => {
    const Event = mongoose.model(
      "events",
      mongoose.Schema(
        {
          //recordid : String,
	      //id : String,
	      access_link : String,
	      access_link_text : String,
	      access_type : String,
	      address_city : String,
	      address_name : String,
	      address_street : String,
	      address_text : String,
	      address_url : String,
	      address_url_text : String,
	      address_zipcode : String,
	      blind : Number,
	      contact_facebook : String,
	      contact_mail : String,
	      contact_phone : String,
	      contact_twitter : String,
	      contact_url : String,
	      cover_alt : String,
	      cover_credit : String,
	      cover_url : String,
	      date_description : String,
	      date_end : Date,
	      date_start : Date,
	      deaf : Number,
	      description : String,
	      //image_couverture : Object,
	      lat_lon : Array,
	      lead_text : String,
	      occurrences : String,
	      pmr : Number,
	      price_detail : String,
	      price_type : String,
	      programs : String,
	      tags : String,
	      title : String,
	      title_event : String,
	      transport : String,
	      updated_at : Date,
	      url : String,
	      //coordinates : Array,
	      record_timestamp : String
        }
      )
    );
    return Event;
  };