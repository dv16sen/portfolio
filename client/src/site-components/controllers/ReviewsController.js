import {Component} from "react";
import withApiData from "../../components/hocs/withApiData";
import {childrenWithProps} from "../../utils";
import {apiOptions} from "../../utils/api/apiOptions";

class ReviewsController extends Component {
    render(){
        return childrenWithProps(this.props);
    }
}

export default withApiData({
    projectReviews: apiOptions.projectReviews,
    contestReviews: apiOptions.contestReviews
})(ReviewsController);