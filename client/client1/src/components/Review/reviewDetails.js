import React from "react";
import AddComment from "../../components/AddMenuform/AddToMenu";
import { connect } from "react-redux";
import * as commentBuilder from "../../actions/index";
import Comments from "./comments";
import Star from "./starRating";
//import Star from './starRating'
//import StarRatingComponent from 'react-star-rating-component';
// import ReactStars from "react-stars";


class reviewDetails extends React.Component {

    componentDidMount() {
        this.props.DisplayAllComments();
    }
    state = {
        formTypes: {
            name: {
                label: "customer Name",
                inpuType: "input",
                value: "",
                configType: {
                    placeholder: "Please enteer your full name",
                    type: "text",
                },
                validation: {
                    type: String,
                    required: true,
                },
            },
            comment: {
                label: "Customer comment",
                inpuType: "input",
                value: "",
                configType: {
                    placeholder: "Please enteer your comment",
                    type: "text",
                },
                validation: {
                    type: String,
                    required: true,
                },
            },
            // rate : {
            //     value: "",
            //     configType: {
            //         placeholder: "Please enteer your comment",
            //         type: "text",
            //     },


            //},
        },
    };

    checkValidityForm(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if (rules.required) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.required) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangeHandler = (event, elemetRequired) => {
        const updatedForm = {
            ...this.state.formTypes,
        };
        const updatedFormElement = {
            ...updatedForm[elemetRequired],
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidityForm(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedForm[elemetRequired] = updatedFormElement;
        //console.log(updatedFormElement);
        this.setState({ formTypes: updatedForm });
    };

    //   
    inputCommentHandler = () => {
        const item = {
            name: this.state.formTypes.name.value,
            comment: this.state.formTypes.comment.value,
            rating: this.props.rating
        };
        console.log("comment", item);

        this.props.addCommentToDatabase(item);
    };


    // deleteItemHandler = (id) => {
    //     this.props.deleteItem(id);
    // };

    // onChangeRateHandler=(eve)=>{
    //     this.props.rating = eve.target.value
    // }


    render() {
        // const {
        //     label,
        //     name,
        //     topTxt,
        //     starCount,
        //     input: { value, onChange },
        //     starSize,
        //     starsColor,
        //     meta: { touched, error }
        // } = this.props.rating
        let formArray = [];
        for (let key in this.state.formTypes) {
            formArray.push({
                id: key,
                config: this.state.formTypes[key],
            });
        }

        let form = (
            <div>
                {formArray.map((item) => {
                    return (
                        <AddComment
                            inpuType={item.config.inpuType}
                            key={item.id}
                            value={item.config.value}
                            label={item.config.label}
                            placeholder={item.config.configType.placeholder}
                            type={item.config.configType.type}
                            change={(event) => this.inputChangeHandler(event, item.id)}
                            list={this.props.item}
                        />
                    );
                })}
                {/* <ReactStars
                    count={5}
                    value={value === "" ? this.props.rating : value}
                    onChange={onChange}
                    size={starSize}
                    color2={starsColor}
                /> */}

            </div>
        );

        let commentLists = (
            <div>
                {this.props.comments.map((item) => {
                    return (
                        <Comments
                            name={item.name}
                            comment={item.comment}
                            key={item._id}
                        // detail={() => this.props.detail(item.name)}
                        // order={() => this.props.orderItem(item.name)}
                        />
                    );
                })}
            </div>
        );
        return (
            <div>
                {form}
     <Star/>
                <button
                    style={{ marginLeft: "700px" }}
                    onClick={this.inputCommentHandler}
                >
                    Register form
        </button>
                <hr />
                <div>{commentLists}</div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        comments: state.comment.comment,
        rating: state.rating.rating
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCommentToDatabase: (com) => dispatch(commentBuilder.addComment(com)),
        DisplayAllComments: () => dispatch(commentBuilder.getAllComment())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(reviewDetails);
