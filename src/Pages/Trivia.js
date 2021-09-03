import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Multiple from '../Components/Multiple';
import Timer from '../Components/Timer';
import '../Styles/trivia.css';
import { setIsClicked } from '../Redux/Action';

class Trivia extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: false,
    };
    this.getRanking = this.getRanking.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  getRanking() {
    const { history } = this.props;

    history.push('/ranking');
  }

  nextQuestion() {
    this.renderQuestionAndAnswers();
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <Header />
        <Multiple />
        { isVisible
        && <Button
          text="Próxima"
          dataTest="btn-next"
          onClick={ this.nextQuestion }
        />}
        <div>
          <Button
            text="Ver Ranking"
            id="btn-ranking"
            dataTest="btn-ranking"
            onClick={ this.getRanking }
          />
        </div>
        <Timer />
      </div>
    );
  }
}

Trivia.propTypes = {
  token: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user, trivia }) => ({
  token: user.token,
  isClicked: trivia.isClicked,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDisabled: () => dispatch(setIsClicked()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);
