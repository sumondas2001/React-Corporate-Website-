import PropTypes from "prop-types";

const OurClient = ({ client }) => {
     // console.log(client);
     const { CompanyImg } = client;
     return (
          <div>
               <img className="w-[293px] h-24 object-cover  mix-blend-multiply" src={CompanyImg} alt="" />
          </div>
     );
};

export default OurClient;


OurClient.propTypes = {

     client: PropTypes.object,

}