import React from "react";

class DialogueInfoCard extends React.Component {
  render() {
    if (this.props.dialogueMetaData) {
      return (
        <div className="d-flex align-items-start flex-column" style={{height: '100%'}}>
            <div>
              <p className="candor-bold">{this.props.dialogueMetaData.poster.displayName} / {this.props.dialogueMetaData.partner.displayName}</p>
              <p className="h2">{this.props.dialogueMetaData.caption}</p>
              <p className="font-weight-light">{this.props.dialogueMetaData.numberOfPosts} responses</p>
            </div>
            <div className="mt-auto">
              <img alt='Candor logo' src='./images/CandorIcon.svg'/>
            </div>
        </div>
    )
    } else {
      // TODO: find a better way for undefined response
      return (
        <div></div>
      )
    }
  }
}

export default DialogueInfoCard;
