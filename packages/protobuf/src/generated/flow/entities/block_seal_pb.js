// source: flow/entities/block_seal.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.flow.entities.AggregatedSignature', null, global);
goog.exportSymbol('proto.flow.entities.BlockSeal', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.flow.entities.BlockSeal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flow.entities.BlockSeal.repeatedFields_, null);
};
goog.inherits(proto.flow.entities.BlockSeal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flow.entities.BlockSeal.displayName = 'proto.flow.entities.BlockSeal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.flow.entities.AggregatedSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flow.entities.AggregatedSignature.repeatedFields_, null);
};
goog.inherits(proto.flow.entities.AggregatedSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flow.entities.AggregatedSignature.displayName = 'proto.flow.entities.AggregatedSignature';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flow.entities.BlockSeal.repeatedFields_ = [3,4,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.flow.entities.BlockSeal.prototype.toObject = function(opt_includeInstance) {
  return proto.flow.entities.BlockSeal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flow.entities.BlockSeal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.BlockSeal.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockId: msg.getBlockId_asB64(),
    executionReceiptId: msg.getExecutionReceiptId_asB64(),
    executionReceiptSignaturesList: msg.getExecutionReceiptSignaturesList_asB64(),
    resultApprovalSignaturesList: msg.getResultApprovalSignaturesList_asB64(),
    finalState: msg.getFinalState_asB64(),
    resultId: msg.getResultId_asB64(),
    aggregatedApprovalSigsList: jspb.Message.toObjectList(msg.getAggregatedApprovalSigsList(),
    proto.flow.entities.AggregatedSignature.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.flow.entities.BlockSeal}
 */
proto.flow.entities.BlockSeal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flow.entities.BlockSeal;
  return proto.flow.entities.BlockSeal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flow.entities.BlockSeal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flow.entities.BlockSeal}
 */
proto.flow.entities.BlockSeal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setExecutionReceiptId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addExecutionReceiptSignatures(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addResultApprovalSignatures(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFinalState(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResultId(value);
      break;
    case 7:
      var value = new proto.flow.entities.AggregatedSignature;
      reader.readMessage(value,proto.flow.entities.AggregatedSignature.deserializeBinaryFromReader);
      msg.addAggregatedApprovalSigs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.flow.entities.BlockSeal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flow.entities.BlockSeal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flow.entities.BlockSeal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.BlockSeal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getExecutionReceiptId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getExecutionReceiptSignaturesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
  f = message.getResultApprovalSignaturesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      4,
      f
    );
  }
  f = message.getFinalState_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getResultId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getAggregatedApprovalSigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.flow.entities.AggregatedSignature.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes block_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.BlockSeal.prototype.getBlockId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes block_id = 1;
 * This is a type-conversion wrapper around `getBlockId()`
 * @return {string}
 */
proto.flow.entities.BlockSeal.prototype.getBlockId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockId()));
};


/**
 * optional bytes block_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockId()`
 * @return {!Uint8Array}
 */
proto.flow.entities.BlockSeal.prototype.getBlockId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.setBlockId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes execution_receipt_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.BlockSeal.prototype.getExecutionReceiptId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes execution_receipt_id = 2;
 * This is a type-conversion wrapper around `getExecutionReceiptId()`
 * @return {string}
 */
proto.flow.entities.BlockSeal.prototype.getExecutionReceiptId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getExecutionReceiptId()));
};


/**
 * optional bytes execution_receipt_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExecutionReceiptId()`
 * @return {!Uint8Array}
 */
proto.flow.entities.BlockSeal.prototype.getExecutionReceiptId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getExecutionReceiptId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.setExecutionReceiptId = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated bytes execution_receipt_signatures = 3;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.flow.entities.BlockSeal.prototype.getExecutionReceiptSignaturesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes execution_receipt_signatures = 3;
 * This is a type-conversion wrapper around `getExecutionReceiptSignaturesList()`
 * @return {!Array<string>}
 */
proto.flow.entities.BlockSeal.prototype.getExecutionReceiptSignaturesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getExecutionReceiptSignaturesList()));
};


/**
 * repeated bytes execution_receipt_signatures = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExecutionReceiptSignaturesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.flow.entities.BlockSeal.prototype.getExecutionReceiptSignaturesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getExecutionReceiptSignaturesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.setExecutionReceiptSignaturesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.addExecutionReceiptSignatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.clearExecutionReceiptSignaturesList = function() {
  return this.setExecutionReceiptSignaturesList([]);
};


/**
 * repeated bytes result_approval_signatures = 4;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.flow.entities.BlockSeal.prototype.getResultApprovalSignaturesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * repeated bytes result_approval_signatures = 4;
 * This is a type-conversion wrapper around `getResultApprovalSignaturesList()`
 * @return {!Array<string>}
 */
proto.flow.entities.BlockSeal.prototype.getResultApprovalSignaturesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getResultApprovalSignaturesList()));
};


/**
 * repeated bytes result_approval_signatures = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResultApprovalSignaturesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.flow.entities.BlockSeal.prototype.getResultApprovalSignaturesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getResultApprovalSignaturesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.setResultApprovalSignaturesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.addResultApprovalSignatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.clearResultApprovalSignaturesList = function() {
  return this.setResultApprovalSignaturesList([]);
};


/**
 * optional bytes final_state = 5;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.BlockSeal.prototype.getFinalState = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes final_state = 5;
 * This is a type-conversion wrapper around `getFinalState()`
 * @return {string}
 */
proto.flow.entities.BlockSeal.prototype.getFinalState_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFinalState()));
};


/**
 * optional bytes final_state = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFinalState()`
 * @return {!Uint8Array}
 */
proto.flow.entities.BlockSeal.prototype.getFinalState_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFinalState()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.setFinalState = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes result_id = 6;
 * @return {!(string|Uint8Array)}
 */
proto.flow.entities.BlockSeal.prototype.getResultId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes result_id = 6;
 * This is a type-conversion wrapper around `getResultId()`
 * @return {string}
 */
proto.flow.entities.BlockSeal.prototype.getResultId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResultId()));
};


/**
 * optional bytes result_id = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResultId()`
 * @return {!Uint8Array}
 */
proto.flow.entities.BlockSeal.prototype.getResultId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResultId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.setResultId = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * repeated AggregatedSignature aggregated_approval_sigs = 7;
 * @return {!Array<!proto.flow.entities.AggregatedSignature>}
 */
proto.flow.entities.BlockSeal.prototype.getAggregatedApprovalSigsList = function() {
  return /** @type{!Array<!proto.flow.entities.AggregatedSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flow.entities.AggregatedSignature, 7));
};


/**
 * @param {!Array<!proto.flow.entities.AggregatedSignature>} value
 * @return {!proto.flow.entities.BlockSeal} returns this
*/
proto.flow.entities.BlockSeal.prototype.setAggregatedApprovalSigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.flow.entities.AggregatedSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flow.entities.AggregatedSignature}
 */
proto.flow.entities.BlockSeal.prototype.addAggregatedApprovalSigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.flow.entities.AggregatedSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flow.entities.BlockSeal} returns this
 */
proto.flow.entities.BlockSeal.prototype.clearAggregatedApprovalSigsList = function() {
  return this.setAggregatedApprovalSigsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flow.entities.AggregatedSignature.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.flow.entities.AggregatedSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.flow.entities.AggregatedSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flow.entities.AggregatedSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.AggregatedSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    verifierSignaturesList: msg.getVerifierSignaturesList_asB64(),
    signerIdsList: msg.getSignerIdsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.flow.entities.AggregatedSignature}
 */
proto.flow.entities.AggregatedSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flow.entities.AggregatedSignature;
  return proto.flow.entities.AggregatedSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flow.entities.AggregatedSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flow.entities.AggregatedSignature}
 */
proto.flow.entities.AggregatedSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addVerifierSignatures(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addSignerIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.flow.entities.AggregatedSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flow.entities.AggregatedSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flow.entities.AggregatedSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flow.entities.AggregatedSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerifierSignaturesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
  f = message.getSignerIdsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * repeated bytes verifier_signatures = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.flow.entities.AggregatedSignature.prototype.getVerifierSignaturesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes verifier_signatures = 1;
 * This is a type-conversion wrapper around `getVerifierSignaturesList()`
 * @return {!Array<string>}
 */
proto.flow.entities.AggregatedSignature.prototype.getVerifierSignaturesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getVerifierSignaturesList()));
};


/**
 * repeated bytes verifier_signatures = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVerifierSignaturesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.flow.entities.AggregatedSignature.prototype.getVerifierSignaturesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getVerifierSignaturesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.flow.entities.AggregatedSignature} returns this
 */
proto.flow.entities.AggregatedSignature.prototype.setVerifierSignaturesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.flow.entities.AggregatedSignature} returns this
 */
proto.flow.entities.AggregatedSignature.prototype.addVerifierSignatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flow.entities.AggregatedSignature} returns this
 */
proto.flow.entities.AggregatedSignature.prototype.clearVerifierSignaturesList = function() {
  return this.setVerifierSignaturesList([]);
};


/**
 * repeated bytes signer_ids = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.flow.entities.AggregatedSignature.prototype.getSignerIdsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes signer_ids = 2;
 * This is a type-conversion wrapper around `getSignerIdsList()`
 * @return {!Array<string>}
 */
proto.flow.entities.AggregatedSignature.prototype.getSignerIdsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getSignerIdsList()));
};


/**
 * repeated bytes signer_ids = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignerIdsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.flow.entities.AggregatedSignature.prototype.getSignerIdsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getSignerIdsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.flow.entities.AggregatedSignature} returns this
 */
proto.flow.entities.AggregatedSignature.prototype.setSignerIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.flow.entities.AggregatedSignature} returns this
 */
proto.flow.entities.AggregatedSignature.prototype.addSignerIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flow.entities.AggregatedSignature} returns this
 */
proto.flow.entities.AggregatedSignature.prototype.clearSignerIdsList = function() {
  return this.setSignerIdsList([]);
};


goog.object.extend(exports, proto.flow.entities);