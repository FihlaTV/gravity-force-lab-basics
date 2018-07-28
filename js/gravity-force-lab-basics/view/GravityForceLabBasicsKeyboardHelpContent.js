// Copyright 2018, University of Colorado Boulder

/**
 * Content for the "Hot Keys and Help" dialog that can be brought up from the sim navigation bar.
 *
 * @author Jesse Greenberg (PhET Interactive Simulations)
 * @author Michael Barlow
 */
define( function( require ) {
  'use strict';

  // modules
  var ArrowKeyNode = require( 'SCENERY_PHET/keyboard/ArrowKeyNode' );
  var EndKeyNode = require( 'SCENERY_PHET/keyboard/EndKeyNode' );
  var GeneralNavigationHelpContent = require( 'SCENERY_PHET/keyboard/help/GeneralNavigationHelpContent' );
  var gravityForceLabBasics = require( 'GRAVITY_FORCE_LAB_BASICS/gravityForceLabBasics' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var HelpContent = require( 'SCENERY_PHET/keyboard/help/HelpContent' );
  var inherit = require( 'PHET_CORE/inherit' );
  var HomeKeyNode = require( 'SCENERY_PHET/keyboard/HomeKeyNode' );
  var RichText = require( 'SCENERY/nodes/RichText' );
  var VBox = require( 'SCENERY/nodes/VBox' );

  // strings
  var moveSpheresHeadingString = require( 'string!GRAVITY_FORCE_LAB_BASICS/moveSpheresHeading' );
  var moveSphereLabelString = require( 'string!GRAVITY_FORCE_LAB_BASICS/moveSphereLabel' );
  var changeMassHeadingString = require( 'string!GRAVITY_FORCE_LAB_BASICS/changeMassHeading' );
  var moveInLargerStepsString = require( 'string!GRAVITY_FORCE_LAB_BASICS/moveInLargerSteps' );
  var jumpToLeftString = require( 'string!GRAVITY_FORCE_LAB_BASICS/jumpToLeft' );
  var jumpToRightString = require( 'string!GRAVITY_FORCE_LAB_BASICS/jumpToRight' );
  var increaseMassString = require( 'string!GRAVITY_FORCE_LAB_BASICS/increaseMass' );
  var decreaseMassString = require( 'string!GRAVITY_FORCE_LAB_BASICS/decreaseMass' );
  var changeMassInLargerStepsString = require( 'string!GRAVITY_FORCE_LAB_BASICS/changeMassInLargerSteps' );
  var jumpToMaximumMassString = require( 'string!GRAVITY_FORCE_LAB_BASICS/jumpToMaximumMass' );
  var jumpToMinimumMassString = require( 'string!GRAVITY_FORCE_LAB_BASICS/jumpToMinimumMass' );

  // constants
  var DEFAULT_LABEL_OPTIONS = {
    font: HelpContent.DEFAULT_LABEL_FONT,
    maxWidth: HelpContent.DEFAULT_TEXT_MAX_WIDTH
  };

  // helper functions that return icons for the dialog
  var ICON_CREATOR = {
    home: function () {
      return new HomeKeyNode();
    },
    end: function() {
      return new EndKeyNode();
    },
    leftRight: function() {
      return HelpContent.leftRightArrowKeysRowIcon();
    },
    downOrLeft: function() {
      return HelpContent.iconOrIcon( new ArrowKeyNode( 'down' ), new ArrowKeyNode( 'left' ) );
    },
    upOrRight: function() {
      return HelpContent.iconOrIcon( new ArrowKeyNode( 'up' ), new ArrowKeyNode( 'right' ) );
    },
    pageUpPageDown: function() {
      return HelpContent.pageUpPageDownRowIcon();
    }
  };

  /**
   * Constructor.
   *
   * @param {Tandem} tandem
   * @constructor
   */
  function GravityForceLabBasicsKeyboardHelpContent( tandem ) {

    // Mass movement help dialog section
    // move mass content
    var moveMassRow = this.constructRow( moveSphereLabelString, 'leftRight' );

    // 'move in larger steps' content
    var moveLargeStepsRow = this.constructRow( moveInLargerStepsString, 'pageUpPageDown' );

    // 'jump to left' content
    var jumpLeftRow = this.constructRow( jumpToLeftString, 'home' );

    // 'jump to right' content
    var jumpRightRow = this.constructRow( jumpToRightString, 'end' );

    var moveMassRows = [ moveMassRow, moveLargeStepsRow, jumpLeftRow, jumpRightRow ];
    var moveMassHelpContent = new HelpContent( moveSpheresHeadingString, moveMassRows );

    // Mass adjustment help section
    var increaseMassRow = this.constructRow( increaseMassString, 'upOrRight' );
    var decreaseMassRow = this.constructRow( decreaseMassString, 'downOrLeft' );
    var changeMassLargeStepsRow = this.constructRow( changeMassInLargerStepsString, 'pageUpPageDown' );
    var jumpToMinMassRow = this.constructRow( jumpToMinimumMassString, 'home' );
    var jumpToMaxMassRow = this. constructRow( jumpToMaximumMassString, 'end' );

    var adjustMassRows = [ increaseMassRow, decreaseMassRow, changeMassLargeStepsRow, jumpToMinMassRow, jumpToMaxMassRow ];
    var adjustMassHelpContent = new HelpContent( changeMassHeadingString, adjustMassRows );

    // align icons for the mass movement and adjustment sections
    HelpContent.alignHelpContentIcons( [ moveMassHelpContent, adjustMassHelpContent ] );

    var generalNavigationHelpContent = new GeneralNavigationHelpContent();

    var leftContent = new VBox( {
      children: [ moveMassHelpContent, adjustMassHelpContent ],
      align: 'top',
      spacing: 30
    } );

    var rightContent = new VBox( {
      children: [ generalNavigationHelpContent ],
      align: 'top',
      spacing: 30
    } );

    HBox.call( this, {
      children: [ leftContent, rightContent ],
      align: 'top',
      spacing: 30,
      tandem: tandem
    } );
  }

  gravityForceLabBasics.register( 'GravityForceLabBasicsKeyboardHelpContent', GravityForceLabBasicsKeyboardHelpContent );

  return inherit( HBox, GravityForceLabBasicsKeyboardHelpContent, {

    /**
     * Construct a row for the help dialog, assembling a label with an icon using Helpcontent. Usages will look like:
     * this.constructRow( 'jump to the end', 'end' );
     * 
     * @param  {string} labelString - the text label for the row (visual)
     * @param  {string} iconOption - must be one of the keys in ICON_CREATOR
     * @return {Object} - {label: Node, icon: Node}, return value of HelpContent.labelWithIcon 
     */
    constructRow: function( labelString, iconOption ) {
      var labelNode = new RichText( labelString, DEFAULT_LABEL_OPTIONS );
      var iconNode = ICON_CREATOR[ iconOption ]();

      return HelpContent.labelWithIcon( labelNode, iconNode, '{{help content}}' );
    }
  } );
} );
