/* Copyright (c) 2006-2013 by OpenLayers Contributors (see authors.txt for 
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

/**
 * @requires OpenLayers/Format/XML/VersionedOGC.js
 */

/**
 * Class: OpenLayers.Format.WCSCapabilities
 * Read WCS Capabilities.
 * 
 * Inherits from:
 *  - <OpenLayers.Format.XML.VersionedOGC>
 */
OpenLayers.Format.WCSCapabilities = OpenLayers.Class(OpenLayers.Format.XML.VersionedOGC, {
    
    /**
     * APIProperty: defaultVersion
     * {String} Version number to assume if none found.  Default is "1.1.0".
     */
    defaultVersion: "1.1.0",

    /**
     * Constructor: OpenLayers.Format.WCSCapabilities
     * Create a new parser for WCS capabilities.
     *
     * Parameters:
     * options - {Object} An optional object whose properties will be set on
     *     this instance.
     */

    /**
     * APIMethod: read
     * Read capabilities data from a string, and return a list of coverages. 
     * 
     * Parameters: 
     * data - {String} or {DOMElement} data to read/parse.
     *
     * Returns:
     * {Array} List of named coverages.
     */
    
    CLASS_NAME: "OpenLayers.Format.WCSCapabilities" 

});
