// Copyright 2019, University of Colorado Boulder

/**
 * This describer is responsible for all gravity-force-lab-basics specific string forming related to mass.
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const GFLBA11yStrings = require( 'GRAVITY_FORCE_LAB_BASICS/GFLBA11yStrings' );
  const gravityForceLabBasics = require( 'GRAVITY_FORCE_LAB_BASICS/gravityForceLabBasics' );
  const GFLBConstants = require( 'GRAVITY_FORCE_LAB_BASICS/GFLBConstants' );
  const MassDescriber = require( 'GRAVITY_FORCE_LAB/view/describers/MassDescriber' );
  const StringUtils = require( 'PHETCOMMON/util/StringUtils' );

  // string
  const mass1LabelString = require( 'string!GRAVITY_FORCE_LAB_BASICS/mass1Label' );
  const mass2LabelString = require( 'string!GRAVITY_FORCE_LAB_BASICS/mass2Label' );
  const massBillionsPatternString = GFLBA11yStrings.massBillionsPattern.value;

  class GFLBMassDescriber extends MassDescriber {

    /**
     * @param {GFLBModel} model
     * @param {ForceDescriber} forceDescriber
     */
    constructor( model, forceDescriber ) {

      const options = {
        object1Label: mass1LabelString,
        object2Label: mass2LabelString,
        convertMassValue: mass => mass / GFLBConstants.BILLION_MULTIPLIER,
        formatMassValue: mass => StringUtils.fillIn( massBillionsPatternString, { mass: mass } )
      };

      super( model, forceDescriber, options );
    }
  }

  return gravityForceLabBasics.register( 'GFLBMassDescriber', GFLBMassDescriber );
} );