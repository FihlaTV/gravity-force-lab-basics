// Copyright 2017-2018, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author Jesse Greenberg (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var gravityForceLabBasics = require( 'GRAVITY_FORCE_LAB_BASICS/gravityForceLabBasics' );

  var GravityForceLabBasicsQueryParameters = QueryStringMachine.getAll( {

    // Shows boundary positions of the two masses, as solid green lines.  The boundary positions for each
    // object will change depending on the size and position of both objects.
    showDragBounds: { type: 'flag' }
  } );

  gravityForceLabBasics.register( 'GravityForceLabBasicsQueryParameters', GravityForceLabBasicsQueryParameters );

  return GravityForceLabBasicsQueryParameters;
} );