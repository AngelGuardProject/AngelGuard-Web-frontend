import {useParams} from "react-router-dom";

function CommunityDetail() {
  const params = useParams();
  return (
    <div>
      <h1>Community Detail {params.id}</h1>
    </div>
  );
}

export default CommunityDetail;
