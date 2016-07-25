'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StarRatingComponent = function (_Component) {
    _inherits(StarRatingComponent, _Component);

    function StarRatingComponent(props) {
        _classCallCheck(this, StarRatingComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StarRatingComponent).call(this));

        _this.state = {
            value: props.value
        };
        return _this;
    }

    _createClass(StarRatingComponent, [{
        key: 'onChange',
        value: function onChange(value) {
            var editing = this.props.editing;

            if (!editing) {
                return;
            }

            this.setState({ value: value });
        }
    }, {
        key: 'onStarClick',
        value: function onStarClick(i, value, name) {
            var _props = this.props;
            var onStarClick = _props.onStarClick;
            var editing = _props.editing;

            if (!editing) {
                return;
            }
            onStarClick && onStarClick(i, value, name);
        }
    }, {
        key: 'renderStars',
        value: function renderStars() {
            var _props2 = this.props;
            var name = _props2.name;
            var starCount = _props2.starCount;
            var starColor = _props2.starColor;
            var editing = _props2.editing;
            var renderStarIcon = _props2.renderStarIcon;
            var value = this.props.value;

            var starStyles = {
                float: 'right',
                cursor: editing ? 'pointer' : 'default',
                marginRight: this.props.distance ? this.props.distance + 'px' : '0px'
            };
            var radioStyles = {
                display: 'none',
                position: 'absolte',
                marginLeft: -9999
            };

            // populate stars
            var starNodes = [];
            for (var i = starCount; i > 0; i--) {
                var id = name + '_' + i;
                var starNodeInput = _react2.default.createElement('input', {
                    key: 'input_' + id,
                    style: radioStyles,
                    className: 'dv-star-rating-input',
                    type: 'radio',
                    name: name,
                    id: id,
                    value: i,
                    checked: value === i,
                    onChange: this.onChange.bind(this, i, name)
                });
                var starNodeLabel = _react2.default.createElement(
                    'label',
                    {
                        key: 'label_' + id,
                        style: value >= i ? { marginRight : starStyles.marginRight, float: starStyles.float, cursor: starStyles.cursor, color: starColor } : starStyles,
                        className: 'dv-star-rating-star',
                        htmlFor: id,
                        onClick: this.onStarClick.bind(this, i, value, name)
                    },
                    typeof renderStarIcon === 'function' ? renderStarIcon(i, value, name) : _react2.default.createElement(
                        'i',
                        { style: { fontStyle: 'normal',fontSize: this.props.size ? this.props.size + 'px' : '14px' } },
                        '★'
                    )
                );
                starNodes.push(starNodeInput);
                starNodes.push(starNodeLabel);
            }

            return starNodes;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props;
            var editing = _props3.editing;
            var className = _props3.className;

            var classes = (0, _classnames2.default)('dv-star-rating', {
                'dv-star-rating-non-editable': !editing
            }, className);

            return _react2.default.createElement(
                'div',
                { style: { display: 'inline-block', position: 'relative' }, className: classes },
                this.renderStars()
            );
        }
    }]);

    return StarRatingComponent;
}(_react.Component);

StarRatingComponent.propTypes = {
    name: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.number,
    editing: _react.PropTypes.bool,
    starCount: _react.PropTypes.number,
    starColor: _react.PropTypes.string,
    onStarClick: _react.PropTypes.func,
    renderStarIcon: _react.PropTypes.func
};
StarRatingComponent.defaultProps = {
    starCount: 5,
    value: 0,
    editing: true,
    starColor: '#ffb400'
};
exports.default = StarRatingComponent;
module.exports = exports['default'];
