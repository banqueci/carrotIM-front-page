/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.message = (function() {

    /**
     * Namespace message.
     * @exports message
     * @namespace
     */
    var message = {};

    message.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof message
         * @interface IMessage
         * @property {number|null} [Cmd] Message Cmd
         * @property {number|Long|null} [Seq] Message Seq
         * @property {number|null} [Version] Message Version
         * @property {message.IHeartBeatMessage|null} [heartMsg] Message heartMsg
         * @property {message.ILoginMessage|null} [loginMsg] Message loginMsg
         * @property {message.ILogoutMessage|null} [logoutMsg] Message logoutMsg
         * @property {message.IReceiptMessage|null} [receiptMsg] Message receiptMsg
         * @property {message.IOrderReceiptMessage|null} [orderReceiptMsg] Message orderReceiptMsg
         * @property {message.IRetractMessage|null} [retractMsg] Message retractMsg
         * @property {message.IRoomMember|null} [roomMember] Message roomMember
         * @property {message.IRoom|null} [room] Message room
         * @property {message.IIMMessage|null} [imMsg] Message imMsg
         * @property {message.IPluginMessage|null} [pluginMsg] Message pluginMsg
         * @property {message.IOrderMessage|null} [orderMsg] Message orderMsg
         * @property {message.IOrderSaveMessage|null} [orderSaveMsg] Message orderSaveMsg
         * @property {message.IOrderCommand|null} [orderCommand] Message orderCommand
         * @property {message.IRelayMessage|null} [relayMsg] Message relayMsg
         * @property {message.IRoomMessage|null} [roomMsg] Message roomMsg
         * @property {message.IAuthTokenMessage|null} [authTokenMsg] Message authTokenMsg
         * @property {message.IAuthStatusMessage|null} [authStatusMsg] Message authStatusMsg
         * @property {message.ISystemMessage|null} [systemMsg] Message systemMsg
         * @property {message.IAppMessage|null} [appMsg] Message appMsg
         * @property {message.IResultMessage|null} [resultMsg] Message resultMsg
         * @property {message.IAckMessage|null} [ackMsg] Message ackMsg
         * @property {message.ITransMessage|null} [transMsg] Message transMsg
         * @property {message.IStateMessage|null} [stateMsg] Message stateMsg
         * @property {message.IModifyMessage|null} [modifyMsg] Message modifyMsg
         * @property {message.IRoomModify|null} [roomModifyMsg] Message roomModifyMsg
         * @property {message.IPushOrderMessage|null} [pushOrderMsg] Message pushOrderMsg
         * @property {message.ISyncKeyMessage|null} [syncKeyMsg] Message syncKeyMsg
         * @property {message.IRegisterMessage|null} [registerMsg] Message registerMsg
         */

        /**
         * Constructs a new Message.
         * @memberof message
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {message.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message Cmd.
         * @member {number} Cmd
         * @memberof message.Message
         * @instance
         */
        Message.prototype.Cmd = 0;

        /**
         * Message Seq.
         * @member {number|Long} Seq
         * @memberof message.Message
         * @instance
         */
        Message.prototype.Seq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Message Version.
         * @member {number} Version
         * @memberof message.Message
         * @instance
         */
        Message.prototype.Version = 0;

        /**
         * Message heartMsg.
         * @member {message.IHeartBeatMessage|null|undefined} heartMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.heartMsg = null;

        /**
         * Message loginMsg.
         * @member {message.ILoginMessage|null|undefined} loginMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.loginMsg = null;

        /**
         * Message logoutMsg.
         * @member {message.ILogoutMessage|null|undefined} logoutMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.logoutMsg = null;

        /**
         * Message receiptMsg.
         * @member {message.IReceiptMessage|null|undefined} receiptMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.receiptMsg = null;

        /**
         * Message orderReceiptMsg.
         * @member {message.IOrderReceiptMessage|null|undefined} orderReceiptMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.orderReceiptMsg = null;

        /**
         * Message retractMsg.
         * @member {message.IRetractMessage|null|undefined} retractMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.retractMsg = null;

        /**
         * Message roomMember.
         * @member {message.IRoomMember|null|undefined} roomMember
         * @memberof message.Message
         * @instance
         */
        Message.prototype.roomMember = null;

        /**
         * Message room.
         * @member {message.IRoom|null|undefined} room
         * @memberof message.Message
         * @instance
         */
        Message.prototype.room = null;

        /**
         * Message imMsg.
         * @member {message.IIMMessage|null|undefined} imMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.imMsg = null;

        /**
         * Message pluginMsg.
         * @member {message.IPluginMessage|null|undefined} pluginMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.pluginMsg = null;

        /**
         * Message orderMsg.
         * @member {message.IOrderMessage|null|undefined} orderMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.orderMsg = null;

        /**
         * Message orderSaveMsg.
         * @member {message.IOrderSaveMessage|null|undefined} orderSaveMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.orderSaveMsg = null;

        /**
         * Message orderCommand.
         * @member {message.IOrderCommand|null|undefined} orderCommand
         * @memberof message.Message
         * @instance
         */
        Message.prototype.orderCommand = null;

        /**
         * Message relayMsg.
         * @member {message.IRelayMessage|null|undefined} relayMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.relayMsg = null;

        /**
         * Message roomMsg.
         * @member {message.IRoomMessage|null|undefined} roomMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.roomMsg = null;

        /**
         * Message authTokenMsg.
         * @member {message.IAuthTokenMessage|null|undefined} authTokenMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.authTokenMsg = null;

        /**
         * Message authStatusMsg.
         * @member {message.IAuthStatusMessage|null|undefined} authStatusMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.authStatusMsg = null;

        /**
         * Message systemMsg.
         * @member {message.ISystemMessage|null|undefined} systemMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.systemMsg = null;

        /**
         * Message appMsg.
         * @member {message.IAppMessage|null|undefined} appMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.appMsg = null;

        /**
         * Message resultMsg.
         * @member {message.IResultMessage|null|undefined} resultMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.resultMsg = null;

        /**
         * Message ackMsg.
         * @member {message.IAckMessage|null|undefined} ackMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.ackMsg = null;

        /**
         * Message transMsg.
         * @member {message.ITransMessage|null|undefined} transMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.transMsg = null;

        /**
         * Message stateMsg.
         * @member {message.IStateMessage|null|undefined} stateMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.stateMsg = null;

        /**
         * Message modifyMsg.
         * @member {message.IModifyMessage|null|undefined} modifyMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.modifyMsg = null;

        /**
         * Message roomModifyMsg.
         * @member {message.IRoomModify|null|undefined} roomModifyMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.roomModifyMsg = null;

        /**
         * Message pushOrderMsg.
         * @member {message.IPushOrderMessage|null|undefined} pushOrderMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.pushOrderMsg = null;

        /**
         * Message syncKeyMsg.
         * @member {message.ISyncKeyMessage|null|undefined} syncKeyMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.syncKeyMsg = null;

        /**
         * Message registerMsg.
         * @member {message.IRegisterMessage|null|undefined} registerMsg
         * @memberof message.Message
         * @instance
         */
        Message.prototype.registerMsg = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message Body.
         * @member {"heartMsg"|"loginMsg"|"logoutMsg"|"receiptMsg"|"orderReceiptMsg"|"retractMsg"|"roomMember"|"room"|"imMsg"|"pluginMsg"|"orderMsg"|"orderSaveMsg"|"orderCommand"|"relayMsg"|"roomMsg"|"authTokenMsg"|"authStatusMsg"|"systemMsg"|"appMsg"|"resultMsg"|"ackMsg"|"transMsg"|"stateMsg"|"modifyMsg"|"roomModifyMsg"|"pushOrderMsg"|"syncKeyMsg"|"registerMsg"|undefined} Body
         * @memberof message.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "Body", {
            get: $util.oneOfGetter($oneOfFields = ["heartMsg", "loginMsg", "logoutMsg", "receiptMsg", "orderReceiptMsg", "retractMsg", "roomMember", "room", "imMsg", "pluginMsg", "orderMsg", "orderSaveMsg", "orderCommand", "relayMsg", "roomMsg", "authTokenMsg", "authStatusMsg", "systemMsg", "appMsg", "resultMsg", "ackMsg", "transMsg", "stateMsg", "modifyMsg", "roomModifyMsg", "pushOrderMsg", "syncKeyMsg", "registerMsg"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof message.Message
         * @static
         * @param {message.IMessage=} [properties] Properties to set
         * @returns {message.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link message.Message.verify|verify} messages.
         * @function encode
         * @memberof message.Message
         * @static
         * @param {message.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cmd != null && Object.hasOwnProperty.call(message, "Cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Cmd);
            if (message.Seq != null && Object.hasOwnProperty.call(message, "Seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Seq);
            if (message.Version != null && Object.hasOwnProperty.call(message, "Version"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.Version);
            if (message.heartMsg != null && Object.hasOwnProperty.call(message, "heartMsg"))
                $root.message.HeartBeatMessage.encode(message.heartMsg, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.loginMsg != null && Object.hasOwnProperty.call(message, "loginMsg"))
                $root.message.LoginMessage.encode(message.loginMsg, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.logoutMsg != null && Object.hasOwnProperty.call(message, "logoutMsg"))
                $root.message.LogoutMessage.encode(message.logoutMsg, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.receiptMsg != null && Object.hasOwnProperty.call(message, "receiptMsg"))
                $root.message.ReceiptMessage.encode(message.receiptMsg, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.orderReceiptMsg != null && Object.hasOwnProperty.call(message, "orderReceiptMsg"))
                $root.message.OrderReceiptMessage.encode(message.orderReceiptMsg, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.retractMsg != null && Object.hasOwnProperty.call(message, "retractMsg"))
                $root.message.RetractMessage.encode(message.retractMsg, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.roomMember != null && Object.hasOwnProperty.call(message, "roomMember"))
                $root.message.RoomMember.encode(message.roomMember, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.room != null && Object.hasOwnProperty.call(message, "room"))
                $root.message.Room.encode(message.room, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.imMsg != null && Object.hasOwnProperty.call(message, "imMsg"))
                $root.message.IMMessage.encode(message.imMsg, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.pluginMsg != null && Object.hasOwnProperty.call(message, "pluginMsg"))
                $root.message.PluginMessage.encode(message.pluginMsg, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.orderMsg != null && Object.hasOwnProperty.call(message, "orderMsg"))
                $root.message.OrderMessage.encode(message.orderMsg, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.orderSaveMsg != null && Object.hasOwnProperty.call(message, "orderSaveMsg"))
                $root.message.OrderSaveMessage.encode(message.orderSaveMsg, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.orderCommand != null && Object.hasOwnProperty.call(message, "orderCommand"))
                $root.message.OrderCommand.encode(message.orderCommand, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.relayMsg != null && Object.hasOwnProperty.call(message, "relayMsg"))
                $root.message.RelayMessage.encode(message.relayMsg, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.roomMsg != null && Object.hasOwnProperty.call(message, "roomMsg"))
                $root.message.RoomMessage.encode(message.roomMsg, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.authTokenMsg != null && Object.hasOwnProperty.call(message, "authTokenMsg"))
                $root.message.AuthTokenMessage.encode(message.authTokenMsg, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.authStatusMsg != null && Object.hasOwnProperty.call(message, "authStatusMsg"))
                $root.message.AuthStatusMessage.encode(message.authStatusMsg, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.systemMsg != null && Object.hasOwnProperty.call(message, "systemMsg"))
                $root.message.SystemMessage.encode(message.systemMsg, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.appMsg != null && Object.hasOwnProperty.call(message, "appMsg"))
                $root.message.AppMessage.encode(message.appMsg, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.resultMsg != null && Object.hasOwnProperty.call(message, "resultMsg"))
                $root.message.ResultMessage.encode(message.resultMsg, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.ackMsg != null && Object.hasOwnProperty.call(message, "ackMsg"))
                $root.message.AckMessage.encode(message.ackMsg, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.transMsg != null && Object.hasOwnProperty.call(message, "transMsg"))
                $root.message.TransMessage.encode(message.transMsg, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.stateMsg != null && Object.hasOwnProperty.call(message, "stateMsg"))
                $root.message.StateMessage.encode(message.stateMsg, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.modifyMsg != null && Object.hasOwnProperty.call(message, "modifyMsg"))
                $root.message.ModifyMessage.encode(message.modifyMsg, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.roomModifyMsg != null && Object.hasOwnProperty.call(message, "roomModifyMsg"))
                $root.message.RoomModify.encode(message.roomModifyMsg, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            if (message.pushOrderMsg != null && Object.hasOwnProperty.call(message, "pushOrderMsg"))
                $root.message.PushOrderMessage.encode(message.pushOrderMsg, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
            if (message.syncKeyMsg != null && Object.hasOwnProperty.call(message, "syncKeyMsg"))
                $root.message.SyncKeyMessage.encode(message.syncKeyMsg, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.registerMsg != null && Object.hasOwnProperty.call(message, "registerMsg"))
                $root.message.RegisterMessage.encode(message.registerMsg, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link message.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.Message
         * @static
         * @param {message.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof message.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Cmd = reader.uint32();
                        break;
                    }
                case 2: {
                        message.Seq = reader.uint64();
                        break;
                    }
                case 3: {
                        message.Version = reader.uint32();
                        break;
                    }
                case 4: {
                        message.heartMsg = $root.message.HeartBeatMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.loginMsg = $root.message.LoginMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.logoutMsg = $root.message.LogoutMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.receiptMsg = $root.message.ReceiptMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.orderReceiptMsg = $root.message.OrderReceiptMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.retractMsg = $root.message.RetractMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.roomMember = $root.message.RoomMember.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.room = $root.message.Room.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.imMsg = $root.message.IMMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.pluginMsg = $root.message.PluginMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.orderMsg = $root.message.OrderMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.orderSaveMsg = $root.message.OrderSaveMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.orderCommand = $root.message.OrderCommand.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.relayMsg = $root.message.RelayMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.roomMsg = $root.message.RoomMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.authTokenMsg = $root.message.AuthTokenMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.authStatusMsg = $root.message.AuthStatusMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.systemMsg = $root.message.SystemMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.appMsg = $root.message.AppMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        message.resultMsg = $root.message.ResultMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 24: {
                        message.ackMsg = $root.message.AckMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 25: {
                        message.transMsg = $root.message.TransMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 26: {
                        message.stateMsg = $root.message.StateMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 27: {
                        message.modifyMsg = $root.message.ModifyMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 28: {
                        message.roomModifyMsg = $root.message.RoomModify.decode(reader, reader.uint32());
                        break;
                    }
                case 29: {
                        message.pushOrderMsg = $root.message.PushOrderMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 30: {
                        message.syncKeyMsg = $root.message.SyncKeyMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 31: {
                        message.registerMsg = $root.message.RegisterMessage.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof message.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.Cmd != null && message.hasOwnProperty("Cmd"))
                if (!$util.isInteger(message.Cmd))
                    return "Cmd: integer expected";
            if (message.Seq != null && message.hasOwnProperty("Seq"))
                if (!$util.isInteger(message.Seq) && !(message.Seq && $util.isInteger(message.Seq.low) && $util.isInteger(message.Seq.high)))
                    return "Seq: integer|Long expected";
            if (message.Version != null && message.hasOwnProperty("Version"))
                if (!$util.isInteger(message.Version))
                    return "Version: integer expected";
            if (message.heartMsg != null && message.hasOwnProperty("heartMsg")) {
                properties.Body = 1;
                {
                    var error = $root.message.HeartBeatMessage.verify(message.heartMsg);
                    if (error)
                        return "heartMsg." + error;
                }
            }
            if (message.loginMsg != null && message.hasOwnProperty("loginMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.LoginMessage.verify(message.loginMsg);
                    if (error)
                        return "loginMsg." + error;
                }
            }
            if (message.logoutMsg != null && message.hasOwnProperty("logoutMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.LogoutMessage.verify(message.logoutMsg);
                    if (error)
                        return "logoutMsg." + error;
                }
            }
            if (message.receiptMsg != null && message.hasOwnProperty("receiptMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.ReceiptMessage.verify(message.receiptMsg);
                    if (error)
                        return "receiptMsg." + error;
                }
            }
            if (message.orderReceiptMsg != null && message.hasOwnProperty("orderReceiptMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.OrderReceiptMessage.verify(message.orderReceiptMsg);
                    if (error)
                        return "orderReceiptMsg." + error;
                }
            }
            if (message.retractMsg != null && message.hasOwnProperty("retractMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.RetractMessage.verify(message.retractMsg);
                    if (error)
                        return "retractMsg." + error;
                }
            }
            if (message.roomMember != null && message.hasOwnProperty("roomMember")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.RoomMember.verify(message.roomMember);
                    if (error)
                        return "roomMember." + error;
                }
            }
            if (message.room != null && message.hasOwnProperty("room")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.Room.verify(message.room);
                    if (error)
                        return "room." + error;
                }
            }
            if (message.imMsg != null && message.hasOwnProperty("imMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.IMMessage.verify(message.imMsg);
                    if (error)
                        return "imMsg." + error;
                }
            }
            if (message.pluginMsg != null && message.hasOwnProperty("pluginMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.PluginMessage.verify(message.pluginMsg);
                    if (error)
                        return "pluginMsg." + error;
                }
            }
            if (message.orderMsg != null && message.hasOwnProperty("orderMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.OrderMessage.verify(message.orderMsg);
                    if (error)
                        return "orderMsg." + error;
                }
            }
            if (message.orderSaveMsg != null && message.hasOwnProperty("orderSaveMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.OrderSaveMessage.verify(message.orderSaveMsg);
                    if (error)
                        return "orderSaveMsg." + error;
                }
            }
            if (message.orderCommand != null && message.hasOwnProperty("orderCommand")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.OrderCommand.verify(message.orderCommand);
                    if (error)
                        return "orderCommand." + error;
                }
            }
            if (message.relayMsg != null && message.hasOwnProperty("relayMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.RelayMessage.verify(message.relayMsg);
                    if (error)
                        return "relayMsg." + error;
                }
            }
            if (message.roomMsg != null && message.hasOwnProperty("roomMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.RoomMessage.verify(message.roomMsg);
                    if (error)
                        return "roomMsg." + error;
                }
            }
            if (message.authTokenMsg != null && message.hasOwnProperty("authTokenMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.AuthTokenMessage.verify(message.authTokenMsg);
                    if (error)
                        return "authTokenMsg." + error;
                }
            }
            if (message.authStatusMsg != null && message.hasOwnProperty("authStatusMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.AuthStatusMessage.verify(message.authStatusMsg);
                    if (error)
                        return "authStatusMsg." + error;
                }
            }
            if (message.systemMsg != null && message.hasOwnProperty("systemMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.SystemMessage.verify(message.systemMsg);
                    if (error)
                        return "systemMsg." + error;
                }
            }
            if (message.appMsg != null && message.hasOwnProperty("appMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.AppMessage.verify(message.appMsg);
                    if (error)
                        return "appMsg." + error;
                }
            }
            if (message.resultMsg != null && message.hasOwnProperty("resultMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.ResultMessage.verify(message.resultMsg);
                    if (error)
                        return "resultMsg." + error;
                }
            }
            if (message.ackMsg != null && message.hasOwnProperty("ackMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.AckMessage.verify(message.ackMsg);
                    if (error)
                        return "ackMsg." + error;
                }
            }
            if (message.transMsg != null && message.hasOwnProperty("transMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.TransMessage.verify(message.transMsg);
                    if (error)
                        return "transMsg." + error;
                }
            }
            if (message.stateMsg != null && message.hasOwnProperty("stateMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.StateMessage.verify(message.stateMsg);
                    if (error)
                        return "stateMsg." + error;
                }
            }
            if (message.modifyMsg != null && message.hasOwnProperty("modifyMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.ModifyMessage.verify(message.modifyMsg);
                    if (error)
                        return "modifyMsg." + error;
                }
            }
            if (message.roomModifyMsg != null && message.hasOwnProperty("roomModifyMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.RoomModify.verify(message.roomModifyMsg);
                    if (error)
                        return "roomModifyMsg." + error;
                }
            }
            if (message.pushOrderMsg != null && message.hasOwnProperty("pushOrderMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.PushOrderMessage.verify(message.pushOrderMsg);
                    if (error)
                        return "pushOrderMsg." + error;
                }
            }
            if (message.syncKeyMsg != null && message.hasOwnProperty("syncKeyMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.SyncKeyMessage.verify(message.syncKeyMsg);
                    if (error)
                        return "syncKeyMsg." + error;
                }
            }
            if (message.registerMsg != null && message.hasOwnProperty("registerMsg")) {
                if (properties.Body === 1)
                    return "Body: multiple values";
                properties.Body = 1;
                {
                    var error = $root.message.RegisterMessage.verify(message.registerMsg);
                    if (error)
                        return "registerMsg." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.message.Message)
                return object;
            var message = new $root.message.Message();
            if (object.Cmd != null)
                message.Cmd = object.Cmd >>> 0;
            if (object.Seq != null)
                if ($util.Long)
                    (message.Seq = $util.Long.fromValue(object.Seq)).unsigned = true;
                else if (typeof object.Seq === "string")
                    message.Seq = parseInt(object.Seq, 10);
                else if (typeof object.Seq === "number")
                    message.Seq = object.Seq;
                else if (typeof object.Seq === "object")
                    message.Seq = new $util.LongBits(object.Seq.low >>> 0, object.Seq.high >>> 0).toNumber(true);
            if (object.Version != null)
                message.Version = object.Version >>> 0;
            if (object.heartMsg != null) {
                if (typeof object.heartMsg !== "object")
                    throw TypeError(".message.Message.heartMsg: object expected");
                message.heartMsg = $root.message.HeartBeatMessage.fromObject(object.heartMsg);
            }
            if (object.loginMsg != null) {
                if (typeof object.loginMsg !== "object")
                    throw TypeError(".message.Message.loginMsg: object expected");
                message.loginMsg = $root.message.LoginMessage.fromObject(object.loginMsg);
            }
            if (object.logoutMsg != null) {
                if (typeof object.logoutMsg !== "object")
                    throw TypeError(".message.Message.logoutMsg: object expected");
                message.logoutMsg = $root.message.LogoutMessage.fromObject(object.logoutMsg);
            }
            if (object.receiptMsg != null) {
                if (typeof object.receiptMsg !== "object")
                    throw TypeError(".message.Message.receiptMsg: object expected");
                message.receiptMsg = $root.message.ReceiptMessage.fromObject(object.receiptMsg);
            }
            if (object.orderReceiptMsg != null) {
                if (typeof object.orderReceiptMsg !== "object")
                    throw TypeError(".message.Message.orderReceiptMsg: object expected");
                message.orderReceiptMsg = $root.message.OrderReceiptMessage.fromObject(object.orderReceiptMsg);
            }
            if (object.retractMsg != null) {
                if (typeof object.retractMsg !== "object")
                    throw TypeError(".message.Message.retractMsg: object expected");
                message.retractMsg = $root.message.RetractMessage.fromObject(object.retractMsg);
            }
            if (object.roomMember != null) {
                if (typeof object.roomMember !== "object")
                    throw TypeError(".message.Message.roomMember: object expected");
                message.roomMember = $root.message.RoomMember.fromObject(object.roomMember);
            }
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".message.Message.room: object expected");
                message.room = $root.message.Room.fromObject(object.room);
            }
            if (object.imMsg != null) {
                if (typeof object.imMsg !== "object")
                    throw TypeError(".message.Message.imMsg: object expected");
                message.imMsg = $root.message.IMMessage.fromObject(object.imMsg);
            }
            if (object.pluginMsg != null) {
                if (typeof object.pluginMsg !== "object")
                    throw TypeError(".message.Message.pluginMsg: object expected");
                message.pluginMsg = $root.message.PluginMessage.fromObject(object.pluginMsg);
            }
            if (object.orderMsg != null) {
                if (typeof object.orderMsg !== "object")
                    throw TypeError(".message.Message.orderMsg: object expected");
                message.orderMsg = $root.message.OrderMessage.fromObject(object.orderMsg);
            }
            if (object.orderSaveMsg != null) {
                if (typeof object.orderSaveMsg !== "object")
                    throw TypeError(".message.Message.orderSaveMsg: object expected");
                message.orderSaveMsg = $root.message.OrderSaveMessage.fromObject(object.orderSaveMsg);
            }
            if (object.orderCommand != null) {
                if (typeof object.orderCommand !== "object")
                    throw TypeError(".message.Message.orderCommand: object expected");
                message.orderCommand = $root.message.OrderCommand.fromObject(object.orderCommand);
            }
            if (object.relayMsg != null) {
                if (typeof object.relayMsg !== "object")
                    throw TypeError(".message.Message.relayMsg: object expected");
                message.relayMsg = $root.message.RelayMessage.fromObject(object.relayMsg);
            }
            if (object.roomMsg != null) {
                if (typeof object.roomMsg !== "object")
                    throw TypeError(".message.Message.roomMsg: object expected");
                message.roomMsg = $root.message.RoomMessage.fromObject(object.roomMsg);
            }
            if (object.authTokenMsg != null) {
                if (typeof object.authTokenMsg !== "object")
                    throw TypeError(".message.Message.authTokenMsg: object expected");
                message.authTokenMsg = $root.message.AuthTokenMessage.fromObject(object.authTokenMsg);
            }
            if (object.authStatusMsg != null) {
                if (typeof object.authStatusMsg !== "object")
                    throw TypeError(".message.Message.authStatusMsg: object expected");
                message.authStatusMsg = $root.message.AuthStatusMessage.fromObject(object.authStatusMsg);
            }
            if (object.systemMsg != null) {
                if (typeof object.systemMsg !== "object")
                    throw TypeError(".message.Message.systemMsg: object expected");
                message.systemMsg = $root.message.SystemMessage.fromObject(object.systemMsg);
            }
            if (object.appMsg != null) {
                if (typeof object.appMsg !== "object")
                    throw TypeError(".message.Message.appMsg: object expected");
                message.appMsg = $root.message.AppMessage.fromObject(object.appMsg);
            }
            if (object.resultMsg != null) {
                if (typeof object.resultMsg !== "object")
                    throw TypeError(".message.Message.resultMsg: object expected");
                message.resultMsg = $root.message.ResultMessage.fromObject(object.resultMsg);
            }
            if (object.ackMsg != null) {
                if (typeof object.ackMsg !== "object")
                    throw TypeError(".message.Message.ackMsg: object expected");
                message.ackMsg = $root.message.AckMessage.fromObject(object.ackMsg);
            }
            if (object.transMsg != null) {
                if (typeof object.transMsg !== "object")
                    throw TypeError(".message.Message.transMsg: object expected");
                message.transMsg = $root.message.TransMessage.fromObject(object.transMsg);
            }
            if (object.stateMsg != null) {
                if (typeof object.stateMsg !== "object")
                    throw TypeError(".message.Message.stateMsg: object expected");
                message.stateMsg = $root.message.StateMessage.fromObject(object.stateMsg);
            }
            if (object.modifyMsg != null) {
                if (typeof object.modifyMsg !== "object")
                    throw TypeError(".message.Message.modifyMsg: object expected");
                message.modifyMsg = $root.message.ModifyMessage.fromObject(object.modifyMsg);
            }
            if (object.roomModifyMsg != null) {
                if (typeof object.roomModifyMsg !== "object")
                    throw TypeError(".message.Message.roomModifyMsg: object expected");
                message.roomModifyMsg = $root.message.RoomModify.fromObject(object.roomModifyMsg);
            }
            if (object.pushOrderMsg != null) {
                if (typeof object.pushOrderMsg !== "object")
                    throw TypeError(".message.Message.pushOrderMsg: object expected");
                message.pushOrderMsg = $root.message.PushOrderMessage.fromObject(object.pushOrderMsg);
            }
            if (object.syncKeyMsg != null) {
                if (typeof object.syncKeyMsg !== "object")
                    throw TypeError(".message.Message.syncKeyMsg: object expected");
                message.syncKeyMsg = $root.message.SyncKeyMessage.fromObject(object.syncKeyMsg);
            }
            if (object.registerMsg != null) {
                if (typeof object.registerMsg !== "object")
                    throw TypeError(".message.Message.registerMsg: object expected");
                message.registerMsg = $root.message.RegisterMessage.fromObject(object.registerMsg);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.Message
         * @static
         * @param {message.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Cmd = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Seq = options.longs === String ? "0" : 0;
                object.Version = 0;
            }
            if (message.Cmd != null && message.hasOwnProperty("Cmd"))
                object.Cmd = message.Cmd;
            if (message.Seq != null && message.hasOwnProperty("Seq"))
                if (typeof message.Seq === "number")
                    object.Seq = options.longs === String ? String(message.Seq) : message.Seq;
                else
                    object.Seq = options.longs === String ? $util.Long.prototype.toString.call(message.Seq) : options.longs === Number ? new $util.LongBits(message.Seq.low >>> 0, message.Seq.high >>> 0).toNumber(true) : message.Seq;
            if (message.Version != null && message.hasOwnProperty("Version"))
                object.Version = message.Version;
            if (message.heartMsg != null && message.hasOwnProperty("heartMsg")) {
                object.heartMsg = $root.message.HeartBeatMessage.toObject(message.heartMsg, options);
                if (options.oneofs)
                    object.Body = "heartMsg";
            }
            if (message.loginMsg != null && message.hasOwnProperty("loginMsg")) {
                object.loginMsg = $root.message.LoginMessage.toObject(message.loginMsg, options);
                if (options.oneofs)
                    object.Body = "loginMsg";
            }
            if (message.logoutMsg != null && message.hasOwnProperty("logoutMsg")) {
                object.logoutMsg = $root.message.LogoutMessage.toObject(message.logoutMsg, options);
                if (options.oneofs)
                    object.Body = "logoutMsg";
            }
            if (message.receiptMsg != null && message.hasOwnProperty("receiptMsg")) {
                object.receiptMsg = $root.message.ReceiptMessage.toObject(message.receiptMsg, options);
                if (options.oneofs)
                    object.Body = "receiptMsg";
            }
            if (message.orderReceiptMsg != null && message.hasOwnProperty("orderReceiptMsg")) {
                object.orderReceiptMsg = $root.message.OrderReceiptMessage.toObject(message.orderReceiptMsg, options);
                if (options.oneofs)
                    object.Body = "orderReceiptMsg";
            }
            if (message.retractMsg != null && message.hasOwnProperty("retractMsg")) {
                object.retractMsg = $root.message.RetractMessage.toObject(message.retractMsg, options);
                if (options.oneofs)
                    object.Body = "retractMsg";
            }
            if (message.roomMember != null && message.hasOwnProperty("roomMember")) {
                object.roomMember = $root.message.RoomMember.toObject(message.roomMember, options);
                if (options.oneofs)
                    object.Body = "roomMember";
            }
            if (message.room != null && message.hasOwnProperty("room")) {
                object.room = $root.message.Room.toObject(message.room, options);
                if (options.oneofs)
                    object.Body = "room";
            }
            if (message.imMsg != null && message.hasOwnProperty("imMsg")) {
                object.imMsg = $root.message.IMMessage.toObject(message.imMsg, options);
                if (options.oneofs)
                    object.Body = "imMsg";
            }
            if (message.pluginMsg != null && message.hasOwnProperty("pluginMsg")) {
                object.pluginMsg = $root.message.PluginMessage.toObject(message.pluginMsg, options);
                if (options.oneofs)
                    object.Body = "pluginMsg";
            }
            if (message.orderMsg != null && message.hasOwnProperty("orderMsg")) {
                object.orderMsg = $root.message.OrderMessage.toObject(message.orderMsg, options);
                if (options.oneofs)
                    object.Body = "orderMsg";
            }
            if (message.orderSaveMsg != null && message.hasOwnProperty("orderSaveMsg")) {
                object.orderSaveMsg = $root.message.OrderSaveMessage.toObject(message.orderSaveMsg, options);
                if (options.oneofs)
                    object.Body = "orderSaveMsg";
            }
            if (message.orderCommand != null && message.hasOwnProperty("orderCommand")) {
                object.orderCommand = $root.message.OrderCommand.toObject(message.orderCommand, options);
                if (options.oneofs)
                    object.Body = "orderCommand";
            }
            if (message.relayMsg != null && message.hasOwnProperty("relayMsg")) {
                object.relayMsg = $root.message.RelayMessage.toObject(message.relayMsg, options);
                if (options.oneofs)
                    object.Body = "relayMsg";
            }
            if (message.roomMsg != null && message.hasOwnProperty("roomMsg")) {
                object.roomMsg = $root.message.RoomMessage.toObject(message.roomMsg, options);
                if (options.oneofs)
                    object.Body = "roomMsg";
            }
            if (message.authTokenMsg != null && message.hasOwnProperty("authTokenMsg")) {
                object.authTokenMsg = $root.message.AuthTokenMessage.toObject(message.authTokenMsg, options);
                if (options.oneofs)
                    object.Body = "authTokenMsg";
            }
            if (message.authStatusMsg != null && message.hasOwnProperty("authStatusMsg")) {
                object.authStatusMsg = $root.message.AuthStatusMessage.toObject(message.authStatusMsg, options);
                if (options.oneofs)
                    object.Body = "authStatusMsg";
            }
            if (message.systemMsg != null && message.hasOwnProperty("systemMsg")) {
                object.systemMsg = $root.message.SystemMessage.toObject(message.systemMsg, options);
                if (options.oneofs)
                    object.Body = "systemMsg";
            }
            if (message.appMsg != null && message.hasOwnProperty("appMsg")) {
                object.appMsg = $root.message.AppMessage.toObject(message.appMsg, options);
                if (options.oneofs)
                    object.Body = "appMsg";
            }
            if (message.resultMsg != null && message.hasOwnProperty("resultMsg")) {
                object.resultMsg = $root.message.ResultMessage.toObject(message.resultMsg, options);
                if (options.oneofs)
                    object.Body = "resultMsg";
            }
            if (message.ackMsg != null && message.hasOwnProperty("ackMsg")) {
                object.ackMsg = $root.message.AckMessage.toObject(message.ackMsg, options);
                if (options.oneofs)
                    object.Body = "ackMsg";
            }
            if (message.transMsg != null && message.hasOwnProperty("transMsg")) {
                object.transMsg = $root.message.TransMessage.toObject(message.transMsg, options);
                if (options.oneofs)
                    object.Body = "transMsg";
            }
            if (message.stateMsg != null && message.hasOwnProperty("stateMsg")) {
                object.stateMsg = $root.message.StateMessage.toObject(message.stateMsg, options);
                if (options.oneofs)
                    object.Body = "stateMsg";
            }
            if (message.modifyMsg != null && message.hasOwnProperty("modifyMsg")) {
                object.modifyMsg = $root.message.ModifyMessage.toObject(message.modifyMsg, options);
                if (options.oneofs)
                    object.Body = "modifyMsg";
            }
            if (message.roomModifyMsg != null && message.hasOwnProperty("roomModifyMsg")) {
                object.roomModifyMsg = $root.message.RoomModify.toObject(message.roomModifyMsg, options);
                if (options.oneofs)
                    object.Body = "roomModifyMsg";
            }
            if (message.pushOrderMsg != null && message.hasOwnProperty("pushOrderMsg")) {
                object.pushOrderMsg = $root.message.PushOrderMessage.toObject(message.pushOrderMsg, options);
                if (options.oneofs)
                    object.Body = "pushOrderMsg";
            }
            if (message.syncKeyMsg != null && message.hasOwnProperty("syncKeyMsg")) {
                object.syncKeyMsg = $root.message.SyncKeyMessage.toObject(message.syncKeyMsg, options);
                if (options.oneofs)
                    object.Body = "syncKeyMsg";
            }
            if (message.registerMsg != null && message.hasOwnProperty("registerMsg")) {
                object.registerMsg = $root.message.RegisterMessage.toObject(message.registerMsg, options);
                if (options.oneofs)
                    object.Body = "registerMsg";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof message.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof message.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.Message";
        };

        return Message;
    })();

    message.HeartBeatMessage = (function() {

        /**
         * Properties of a HeartBeatMessage.
         * @memberof message
         * @interface IHeartBeatMessage
         */

        /**
         * Constructs a new HeartBeatMessage.
         * @memberof message
         * @classdesc Represents a HeartBeatMessage.
         * @implements IHeartBeatMessage
         * @constructor
         * @param {message.IHeartBeatMessage=} [properties] Properties to set
         */
        function HeartBeatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HeartBeatMessage instance using the specified properties.
         * @function create
         * @memberof message.HeartBeatMessage
         * @static
         * @param {message.IHeartBeatMessage=} [properties] Properties to set
         * @returns {message.HeartBeatMessage} HeartBeatMessage instance
         */
        HeartBeatMessage.create = function create(properties) {
            return new HeartBeatMessage(properties);
        };

        /**
         * Encodes the specified HeartBeatMessage message. Does not implicitly {@link message.HeartBeatMessage.verify|verify} messages.
         * @function encode
         * @memberof message.HeartBeatMessage
         * @static
         * @param {message.IHeartBeatMessage} message HeartBeatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HeartBeatMessage message, length delimited. Does not implicitly {@link message.HeartBeatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.HeartBeatMessage
         * @static
         * @param {message.IHeartBeatMessage} message HeartBeatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.HeartBeatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.HeartBeatMessage} HeartBeatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.HeartBeatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartBeatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.HeartBeatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.HeartBeatMessage} HeartBeatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatMessage message.
         * @function verify
         * @memberof message.HeartBeatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HeartBeatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.HeartBeatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.HeartBeatMessage} HeartBeatMessage
         */
        HeartBeatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.HeartBeatMessage)
                return object;
            return new $root.message.HeartBeatMessage();
        };

        /**
         * Creates a plain object from a HeartBeatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.HeartBeatMessage
         * @static
         * @param {message.HeartBeatMessage} message HeartBeatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatMessage.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HeartBeatMessage to JSON.
         * @function toJSON
         * @memberof message.HeartBeatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartBeatMessage
         * @function getTypeUrl
         * @memberof message.HeartBeatMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartBeatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.HeartBeatMessage";
        };

        return HeartBeatMessage;
    })();

    message.RegisterMessage = (function() {

        /**
         * Properties of a RegisterMessage.
         * @memberof message
         * @interface IRegisterMessage
         * @property {string|null} [Addr] RegisterMessage Addr
         */

        /**
         * Constructs a new RegisterMessage.
         * @memberof message
         * @classdesc Represents a RegisterMessage.
         * @implements IRegisterMessage
         * @constructor
         * @param {message.IRegisterMessage=} [properties] Properties to set
         */
        function RegisterMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterMessage Addr.
         * @member {string} Addr
         * @memberof message.RegisterMessage
         * @instance
         */
        RegisterMessage.prototype.Addr = "";

        /**
         * Creates a new RegisterMessage instance using the specified properties.
         * @function create
         * @memberof message.RegisterMessage
         * @static
         * @param {message.IRegisterMessage=} [properties] Properties to set
         * @returns {message.RegisterMessage} RegisterMessage instance
         */
        RegisterMessage.create = function create(properties) {
            return new RegisterMessage(properties);
        };

        /**
         * Encodes the specified RegisterMessage message. Does not implicitly {@link message.RegisterMessage.verify|verify} messages.
         * @function encode
         * @memberof message.RegisterMessage
         * @static
         * @param {message.IRegisterMessage} message RegisterMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Addr != null && Object.hasOwnProperty.call(message, "Addr"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Addr);
            return writer;
        };

        /**
         * Encodes the specified RegisterMessage message, length delimited. Does not implicitly {@link message.RegisterMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.RegisterMessage
         * @static
         * @param {message.IRegisterMessage} message RegisterMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.RegisterMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.RegisterMessage} RegisterMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RegisterMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Addr = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.RegisterMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.RegisterMessage} RegisterMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterMessage message.
         * @function verify
         * @memberof message.RegisterMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Addr != null && message.hasOwnProperty("Addr"))
                if (!$util.isString(message.Addr))
                    return "Addr: string expected";
            return null;
        };

        /**
         * Creates a RegisterMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RegisterMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.RegisterMessage} RegisterMessage
         */
        RegisterMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.RegisterMessage)
                return object;
            var message = new $root.message.RegisterMessage();
            if (object.Addr != null)
                message.Addr = String(object.Addr);
            return message;
        };

        /**
         * Creates a plain object from a RegisterMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RegisterMessage
         * @static
         * @param {message.RegisterMessage} message RegisterMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Addr = "";
            if (message.Addr != null && message.hasOwnProperty("Addr"))
                object.Addr = message.Addr;
            return object;
        };

        /**
         * Converts this RegisterMessage to JSON.
         * @function toJSON
         * @memberof message.RegisterMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegisterMessage
         * @function getTypeUrl
         * @memberof message.RegisterMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegisterMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.RegisterMessage";
        };

        return RegisterMessage;
    })();

    message.ReceiptMessage = (function() {

        /**
         * Properties of a ReceiptMessage.
         * @memberof message
         * @interface IReceiptMessage
         * @property {string|null} [Sender] ReceiptMessage Sender
         * @property {string|null} [Receiver] ReceiptMessage Receiver
         * @property {Array.<message.IRelayInfo>|null} [Relay] ReceiptMessage Relay
         * @property {string|null} [MergeContent] ReceiptMessage MergeContent
         * @property {number|Long|null} [MsgId] ReceiptMessage MsgId
         * @property {number|null} [MsgStatus] ReceiptMessage MsgStatus
         * @property {number|Long|null} [Timestamp] ReceiptMessage Timestamp
         * @property {number|Long|null} [ServerTimestamp] ReceiptMessage ServerTimestamp
         * @property {number|Long|null} [UniqueId] ReceiptMessage UniqueId
         */

        /**
         * Constructs a new ReceiptMessage.
         * @memberof message
         * @classdesc Represents a ReceiptMessage.
         * @implements IReceiptMessage
         * @constructor
         * @param {message.IReceiptMessage=} [properties] Properties to set
         */
        function ReceiptMessage(properties) {
            this.Relay = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiptMessage Sender.
         * @member {string} Sender
         * @memberof message.ReceiptMessage
         * @instance
         */
        ReceiptMessage.prototype.Sender = "";

        /**
         * ReceiptMessage Receiver.
         * @member {string} Receiver
         * @memberof message.ReceiptMessage
         * @instance
         */
        ReceiptMessage.prototype.Receiver = "";

        /**
         * ReceiptMessage Relay.
         * @member {Array.<message.IRelayInfo>} Relay
         * @memberof message.ReceiptMessage
         * @instance
         */
        ReceiptMessage.prototype.Relay = $util.emptyArray;

        /**
         * ReceiptMessage MergeContent.
         * @member {string} MergeContent
         * @memberof message.ReceiptMessage
         * @instance
         */
        ReceiptMessage.prototype.MergeContent = "";

        /**
         * ReceiptMessage MsgId.
         * @member {number|Long} MsgId
         * @memberof message.ReceiptMessage
         * @instance
         */
        ReceiptMessage.prototype.MsgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ReceiptMessage MsgStatus.
         * @member {number} MsgStatus
         * @memberof message.ReceiptMessage
         * @instance
         */
        ReceiptMessage.prototype.MsgStatus = 0;

        /**
         * ReceiptMessage Timestamp.
         * @member {number|Long} Timestamp
         * @memberof message.ReceiptMessage
         * @instance
         */
        ReceiptMessage.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ReceiptMessage ServerTimestamp.
         * @member {number|Long} ServerTimestamp
         * @memberof message.ReceiptMessage
         * @instance
         */
        ReceiptMessage.prototype.ServerTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ReceiptMessage UniqueId.
         * @member {number|Long} UniqueId
         * @memberof message.ReceiptMessage
         * @instance
         */
        ReceiptMessage.prototype.UniqueId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ReceiptMessage instance using the specified properties.
         * @function create
         * @memberof message.ReceiptMessage
         * @static
         * @param {message.IReceiptMessage=} [properties] Properties to set
         * @returns {message.ReceiptMessage} ReceiptMessage instance
         */
        ReceiptMessage.create = function create(properties) {
            return new ReceiptMessage(properties);
        };

        /**
         * Encodes the specified ReceiptMessage message. Does not implicitly {@link message.ReceiptMessage.verify|verify} messages.
         * @function encode
         * @memberof message.ReceiptMessage
         * @static
         * @param {message.IReceiptMessage} message ReceiptMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver);
            if (message.Relay != null && message.Relay.length)
                for (var i = 0; i < message.Relay.length; ++i)
                    $root.message.RelayInfo.encode(message.Relay[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.MergeContent != null && Object.hasOwnProperty.call(message, "MergeContent"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.MergeContent);
            if (message.MsgId != null && Object.hasOwnProperty.call(message, "MsgId"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.MsgId);
            if (message.MsgStatus != null && Object.hasOwnProperty.call(message, "MsgStatus"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.MsgStatus);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.Timestamp);
            if (message.ServerTimestamp != null && Object.hasOwnProperty.call(message, "ServerTimestamp"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.ServerTimestamp);
            if (message.UniqueId != null && Object.hasOwnProperty.call(message, "UniqueId"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.UniqueId);
            return writer;
        };

        /**
         * Encodes the specified ReceiptMessage message, length delimited. Does not implicitly {@link message.ReceiptMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.ReceiptMessage
         * @static
         * @param {message.IReceiptMessage} message ReceiptMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiptMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiptMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.ReceiptMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.ReceiptMessage} ReceiptMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ReceiptMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 7: {
                        if (!(message.Relay && message.Relay.length))
                            message.Relay = [];
                        message.Relay.push($root.message.RelayInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        message.MergeContent = reader.string();
                        break;
                    }
                case 9: {
                        message.MsgId = reader.uint64();
                        break;
                    }
                case 10: {
                        message.MsgStatus = reader.uint32();
                        break;
                    }
                case 11: {
                        message.Timestamp = reader.uint64();
                        break;
                    }
                case 12: {
                        message.ServerTimestamp = reader.uint64();
                        break;
                    }
                case 13: {
                        message.UniqueId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReceiptMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.ReceiptMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.ReceiptMessage} ReceiptMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiptMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiptMessage message.
         * @function verify
         * @memberof message.ReceiptMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiptMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.Relay != null && message.hasOwnProperty("Relay")) {
                if (!Array.isArray(message.Relay))
                    return "Relay: array expected";
                for (var i = 0; i < message.Relay.length; ++i) {
                    var error = $root.message.RelayInfo.verify(message.Relay[i]);
                    if (error)
                        return "Relay." + error;
                }
            }
            if (message.MergeContent != null && message.hasOwnProperty("MergeContent"))
                if (!$util.isString(message.MergeContent))
                    return "MergeContent: string expected";
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (!$util.isInteger(message.MsgId) && !(message.MsgId && $util.isInteger(message.MsgId.low) && $util.isInteger(message.MsgId.high)))
                    return "MsgId: integer|Long expected";
            if (message.MsgStatus != null && message.hasOwnProperty("MsgStatus"))
                if (!$util.isInteger(message.MsgStatus))
                    return "MsgStatus: integer expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.ServerTimestamp != null && message.hasOwnProperty("ServerTimestamp"))
                if (!$util.isInteger(message.ServerTimestamp) && !(message.ServerTimestamp && $util.isInteger(message.ServerTimestamp.low) && $util.isInteger(message.ServerTimestamp.high)))
                    return "ServerTimestamp: integer|Long expected";
            if (message.UniqueId != null && message.hasOwnProperty("UniqueId"))
                if (!$util.isInteger(message.UniqueId) && !(message.UniqueId && $util.isInteger(message.UniqueId.low) && $util.isInteger(message.UniqueId.high)))
                    return "UniqueId: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReceiptMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.ReceiptMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.ReceiptMessage} ReceiptMessage
         */
        ReceiptMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.ReceiptMessage)
                return object;
            var message = new $root.message.ReceiptMessage();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.Relay) {
                if (!Array.isArray(object.Relay))
                    throw TypeError(".message.ReceiptMessage.Relay: array expected");
                message.Relay = [];
                for (var i = 0; i < object.Relay.length; ++i) {
                    if (typeof object.Relay[i] !== "object")
                        throw TypeError(".message.ReceiptMessage.Relay: object expected");
                    message.Relay[i] = $root.message.RelayInfo.fromObject(object.Relay[i]);
                }
            }
            if (object.MergeContent != null)
                message.MergeContent = String(object.MergeContent);
            if (object.MsgId != null)
                if ($util.Long)
                    (message.MsgId = $util.Long.fromValue(object.MsgId)).unsigned = true;
                else if (typeof object.MsgId === "string")
                    message.MsgId = parseInt(object.MsgId, 10);
                else if (typeof object.MsgId === "number")
                    message.MsgId = object.MsgId;
                else if (typeof object.MsgId === "object")
                    message.MsgId = new $util.LongBits(object.MsgId.low >>> 0, object.MsgId.high >>> 0).toNumber(true);
            if (object.MsgStatus != null)
                message.MsgStatus = object.MsgStatus >>> 0;
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.ServerTimestamp != null)
                if ($util.Long)
                    (message.ServerTimestamp = $util.Long.fromValue(object.ServerTimestamp)).unsigned = true;
                else if (typeof object.ServerTimestamp === "string")
                    message.ServerTimestamp = parseInt(object.ServerTimestamp, 10);
                else if (typeof object.ServerTimestamp === "number")
                    message.ServerTimestamp = object.ServerTimestamp;
                else if (typeof object.ServerTimestamp === "object")
                    message.ServerTimestamp = new $util.LongBits(object.ServerTimestamp.low >>> 0, object.ServerTimestamp.high >>> 0).toNumber(true);
            if (object.UniqueId != null)
                if ($util.Long)
                    (message.UniqueId = $util.Long.fromValue(object.UniqueId)).unsigned = true;
                else if (typeof object.UniqueId === "string")
                    message.UniqueId = parseInt(object.UniqueId, 10);
                else if (typeof object.UniqueId === "number")
                    message.UniqueId = object.UniqueId;
                else if (typeof object.UniqueId === "object")
                    message.UniqueId = new $util.LongBits(object.UniqueId.low >>> 0, object.UniqueId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ReceiptMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.ReceiptMessage
         * @static
         * @param {message.ReceiptMessage} message ReceiptMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiptMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Relay = [];
            if (options.defaults) {
                object.Sender = "";
                object.Receiver = "";
                object.MergeContent = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MsgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MsgId = options.longs === String ? "0" : 0;
                object.MsgStatus = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ServerTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ServerTimestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UniqueId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UniqueId = options.longs === String ? "0" : 0;
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.Relay && message.Relay.length) {
                object.Relay = [];
                for (var j = 0; j < message.Relay.length; ++j)
                    object.Relay[j] = $root.message.RelayInfo.toObject(message.Relay[j], options);
            }
            if (message.MergeContent != null && message.hasOwnProperty("MergeContent"))
                object.MergeContent = message.MergeContent;
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (typeof message.MsgId === "number")
                    object.MsgId = options.longs === String ? String(message.MsgId) : message.MsgId;
                else
                    object.MsgId = options.longs === String ? $util.Long.prototype.toString.call(message.MsgId) : options.longs === Number ? new $util.LongBits(message.MsgId.low >>> 0, message.MsgId.high >>> 0).toNumber(true) : message.MsgId;
            if (message.MsgStatus != null && message.hasOwnProperty("MsgStatus"))
                object.MsgStatus = message.MsgStatus;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.ServerTimestamp != null && message.hasOwnProperty("ServerTimestamp"))
                if (typeof message.ServerTimestamp === "number")
                    object.ServerTimestamp = options.longs === String ? String(message.ServerTimestamp) : message.ServerTimestamp;
                else
                    object.ServerTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.ServerTimestamp) : options.longs === Number ? new $util.LongBits(message.ServerTimestamp.low >>> 0, message.ServerTimestamp.high >>> 0).toNumber(true) : message.ServerTimestamp;
            if (message.UniqueId != null && message.hasOwnProperty("UniqueId"))
                if (typeof message.UniqueId === "number")
                    object.UniqueId = options.longs === String ? String(message.UniqueId) : message.UniqueId;
                else
                    object.UniqueId = options.longs === String ? $util.Long.prototype.toString.call(message.UniqueId) : options.longs === Number ? new $util.LongBits(message.UniqueId.low >>> 0, message.UniqueId.high >>> 0).toNumber(true) : message.UniqueId;
            return object;
        };

        /**
         * Converts this ReceiptMessage to JSON.
         * @function toJSON
         * @memberof message.ReceiptMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiptMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReceiptMessage
         * @function getTypeUrl
         * @memberof message.ReceiptMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReceiptMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.ReceiptMessage";
        };

        return ReceiptMessage;
    })();

    message.OrderReceiptMessage = (function() {

        /**
         * Properties of an OrderReceiptMessage.
         * @memberof message
         * @interface IOrderReceiptMessage
         * @property {number|null} [Code] OrderReceiptMessage Code
         * @property {string|null} [Msg] OrderReceiptMessage Msg
         */

        /**
         * Constructs a new OrderReceiptMessage.
         * @memberof message
         * @classdesc Represents an OrderReceiptMessage.
         * @implements IOrderReceiptMessage
         * @constructor
         * @param {message.IOrderReceiptMessage=} [properties] Properties to set
         */
        function OrderReceiptMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderReceiptMessage Code.
         * @member {number} Code
         * @memberof message.OrderReceiptMessage
         * @instance
         */
        OrderReceiptMessage.prototype.Code = 0;

        /**
         * OrderReceiptMessage Msg.
         * @member {string} Msg
         * @memberof message.OrderReceiptMessage
         * @instance
         */
        OrderReceiptMessage.prototype.Msg = "";

        /**
         * Creates a new OrderReceiptMessage instance using the specified properties.
         * @function create
         * @memberof message.OrderReceiptMessage
         * @static
         * @param {message.IOrderReceiptMessage=} [properties] Properties to set
         * @returns {message.OrderReceiptMessage} OrderReceiptMessage instance
         */
        OrderReceiptMessage.create = function create(properties) {
            return new OrderReceiptMessage(properties);
        };

        /**
         * Encodes the specified OrderReceiptMessage message. Does not implicitly {@link message.OrderReceiptMessage.verify|verify} messages.
         * @function encode
         * @memberof message.OrderReceiptMessage
         * @static
         * @param {message.IOrderReceiptMessage} message OrderReceiptMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderReceiptMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Code);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified OrderReceiptMessage message, length delimited. Does not implicitly {@link message.OrderReceiptMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.OrderReceiptMessage
         * @static
         * @param {message.IOrderReceiptMessage} message OrderReceiptMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderReceiptMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderReceiptMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.OrderReceiptMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.OrderReceiptMessage} OrderReceiptMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderReceiptMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.OrderReceiptMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.Msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderReceiptMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.OrderReceiptMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.OrderReceiptMessage} OrderReceiptMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderReceiptMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderReceiptMessage message.
         * @function verify
         * @memberof message.OrderReceiptMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderReceiptMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            return null;
        };

        /**
         * Creates an OrderReceiptMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.OrderReceiptMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.OrderReceiptMessage} OrderReceiptMessage
         */
        OrderReceiptMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.OrderReceiptMessage)
                return object;
            var message = new $root.message.OrderReceiptMessage();
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from an OrderReceiptMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.OrderReceiptMessage
         * @static
         * @param {message.OrderReceiptMessage} message OrderReceiptMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderReceiptMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this OrderReceiptMessage to JSON.
         * @function toJSON
         * @memberof message.OrderReceiptMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderReceiptMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OrderReceiptMessage
         * @function getTypeUrl
         * @memberof message.OrderReceiptMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OrderReceiptMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.OrderReceiptMessage";
        };

        return OrderReceiptMessage;
    })();

    message.RetractMessage = (function() {

        /**
         * Properties of a RetractMessage.
         * @memberof message
         * @interface IRetractMessage
         * @property {string|null} [Sender] RetractMessage Sender
         * @property {string|null} [Receiver] RetractMessage Receiver
         * @property {number|Long|null} [MsgId] RetractMessage MsgId
         */

        /**
         * Constructs a new RetractMessage.
         * @memberof message
         * @classdesc Represents a RetractMessage.
         * @implements IRetractMessage
         * @constructor
         * @param {message.IRetractMessage=} [properties] Properties to set
         */
        function RetractMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RetractMessage Sender.
         * @member {string} Sender
         * @memberof message.RetractMessage
         * @instance
         */
        RetractMessage.prototype.Sender = "";

        /**
         * RetractMessage Receiver.
         * @member {string} Receiver
         * @memberof message.RetractMessage
         * @instance
         */
        RetractMessage.prototype.Receiver = "";

        /**
         * RetractMessage MsgId.
         * @member {number|Long} MsgId
         * @memberof message.RetractMessage
         * @instance
         */
        RetractMessage.prototype.MsgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new RetractMessage instance using the specified properties.
         * @function create
         * @memberof message.RetractMessage
         * @static
         * @param {message.IRetractMessage=} [properties] Properties to set
         * @returns {message.RetractMessage} RetractMessage instance
         */
        RetractMessage.create = function create(properties) {
            return new RetractMessage(properties);
        };

        /**
         * Encodes the specified RetractMessage message. Does not implicitly {@link message.RetractMessage.verify|verify} messages.
         * @function encode
         * @memberof message.RetractMessage
         * @static
         * @param {message.IRetractMessage} message RetractMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RetractMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver);
            if (message.MsgId != null && Object.hasOwnProperty.call(message, "MsgId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.MsgId);
            return writer;
        };

        /**
         * Encodes the specified RetractMessage message, length delimited. Does not implicitly {@link message.RetractMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.RetractMessage
         * @static
         * @param {message.IRetractMessage} message RetractMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RetractMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RetractMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.RetractMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.RetractMessage} RetractMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RetractMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RetractMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 3: {
                        message.MsgId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RetractMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.RetractMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.RetractMessage} RetractMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RetractMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RetractMessage message.
         * @function verify
         * @memberof message.RetractMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RetractMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (!$util.isInteger(message.MsgId) && !(message.MsgId && $util.isInteger(message.MsgId.low) && $util.isInteger(message.MsgId.high)))
                    return "MsgId: integer|Long expected";
            return null;
        };

        /**
         * Creates a RetractMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RetractMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.RetractMessage} RetractMessage
         */
        RetractMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.RetractMessage)
                return object;
            var message = new $root.message.RetractMessage();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.MsgId != null)
                if ($util.Long)
                    (message.MsgId = $util.Long.fromValue(object.MsgId)).unsigned = true;
                else if (typeof object.MsgId === "string")
                    message.MsgId = parseInt(object.MsgId, 10);
                else if (typeof object.MsgId === "number")
                    message.MsgId = object.MsgId;
                else if (typeof object.MsgId === "object")
                    message.MsgId = new $util.LongBits(object.MsgId.low >>> 0, object.MsgId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a RetractMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RetractMessage
         * @static
         * @param {message.RetractMessage} message RetractMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RetractMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Sender = "";
                object.Receiver = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MsgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MsgId = options.longs === String ? "0" : 0;
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (typeof message.MsgId === "number")
                    object.MsgId = options.longs === String ? String(message.MsgId) : message.MsgId;
                else
                    object.MsgId = options.longs === String ? $util.Long.prototype.toString.call(message.MsgId) : options.longs === Number ? new $util.LongBits(message.MsgId.low >>> 0, message.MsgId.high >>> 0).toNumber(true) : message.MsgId;
            return object;
        };

        /**
         * Converts this RetractMessage to JSON.
         * @function toJSON
         * @memberof message.RetractMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RetractMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RetractMessage
         * @function getTypeUrl
         * @memberof message.RetractMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RetractMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.RetractMessage";
        };

        return RetractMessage;
    })();

    message.RoomMember = (function() {

        /**
         * Properties of a RoomMember.
         * @memberof message
         * @interface IRoomMember
         * @property {string|null} [RoomId] RoomMember RoomId
         * @property {string|null} [UserId] RoomMember UserId
         * @property {number|null} [PlatformId] RoomMember PlatformId
         */

        /**
         * Constructs a new RoomMember.
         * @memberof message
         * @classdesc Represents a RoomMember.
         * @implements IRoomMember
         * @constructor
         * @param {message.IRoomMember=} [properties] Properties to set
         */
        function RoomMember(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomMember RoomId.
         * @member {string} RoomId
         * @memberof message.RoomMember
         * @instance
         */
        RoomMember.prototype.RoomId = "";

        /**
         * RoomMember UserId.
         * @member {string} UserId
         * @memberof message.RoomMember
         * @instance
         */
        RoomMember.prototype.UserId = "";

        /**
         * RoomMember PlatformId.
         * @member {number} PlatformId
         * @memberof message.RoomMember
         * @instance
         */
        RoomMember.prototype.PlatformId = 0;

        /**
         * Creates a new RoomMember instance using the specified properties.
         * @function create
         * @memberof message.RoomMember
         * @static
         * @param {message.IRoomMember=} [properties] Properties to set
         * @returns {message.RoomMember} RoomMember instance
         */
        RoomMember.create = function create(properties) {
            return new RoomMember(properties);
        };

        /**
         * Encodes the specified RoomMember message. Does not implicitly {@link message.RoomMember.verify|verify} messages.
         * @function encode
         * @memberof message.RoomMember
         * @static
         * @param {message.IRoomMember} message RoomMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoomId);
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.UserId);
            if (message.PlatformId != null && Object.hasOwnProperty.call(message, "PlatformId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.PlatformId);
            return writer;
        };

        /**
         * Encodes the specified RoomMember message, length delimited. Does not implicitly {@link message.RoomMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.RoomMember
         * @static
         * @param {message.IRoomMember} message RoomMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomMember message from the specified reader or buffer.
         * @function decode
         * @memberof message.RoomMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.RoomMember} RoomMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMember.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RoomMember();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.RoomId = reader.string();
                        break;
                    }
                case 2: {
                        message.UserId = reader.string();
                        break;
                    }
                case 3: {
                        message.PlatformId = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomMember message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.RoomMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.RoomMember} RoomMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMember.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomMember message.
         * @function verify
         * @memberof message.RoomMember
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomMember.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isString(message.RoomId))
                    return "RoomId: string expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isString(message.UserId))
                    return "UserId: string expected";
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                if (!$util.isInteger(message.PlatformId))
                    return "PlatformId: integer expected";
            return null;
        };

        /**
         * Creates a RoomMember message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RoomMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.RoomMember} RoomMember
         */
        RoomMember.fromObject = function fromObject(object) {
            if (object instanceof $root.message.RoomMember)
                return object;
            var message = new $root.message.RoomMember();
            if (object.RoomId != null)
                message.RoomId = String(object.RoomId);
            if (object.UserId != null)
                message.UserId = String(object.UserId);
            if (object.PlatformId != null)
                message.PlatformId = object.PlatformId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RoomMember message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RoomMember
         * @static
         * @param {message.RoomMember} message RoomMember
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomMember.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RoomId = "";
                object.UserId = "";
                object.PlatformId = 0;
            }
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                object.RoomId = message.RoomId;
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                object.UserId = message.UserId;
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                object.PlatformId = message.PlatformId;
            return object;
        };

        /**
         * Converts this RoomMember to JSON.
         * @function toJSON
         * @memberof message.RoomMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomMember
         * @function getTypeUrl
         * @memberof message.RoomMember
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomMember.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.RoomMember";
        };

        return RoomMember;
    })();

    message.Room = (function() {

        /**
         * Properties of a Room.
         * @memberof message
         * @interface IRoom
         * @property {string|null} [RoomId] Room RoomId
         */

        /**
         * Constructs a new Room.
         * @memberof message
         * @classdesc Represents a Room.
         * @implements IRoom
         * @constructor
         * @param {message.IRoom=} [properties] Properties to set
         */
        function Room(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Room RoomId.
         * @member {string} RoomId
         * @memberof message.Room
         * @instance
         */
        Room.prototype.RoomId = "";

        /**
         * Creates a new Room instance using the specified properties.
         * @function create
         * @memberof message.Room
         * @static
         * @param {message.IRoom=} [properties] Properties to set
         * @returns {message.Room} Room instance
         */
        Room.create = function create(properties) {
            return new Room(properties);
        };

        /**
         * Encodes the specified Room message. Does not implicitly {@link message.Room.verify|verify} messages.
         * @function encode
         * @memberof message.Room
         * @static
         * @param {message.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoomId);
            return writer;
        };

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link message.Room.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.Room
         * @static
         * @param {message.IRoom} message Room message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Room.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @function decode
         * @memberof message.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.Room();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.RoomId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.Room
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.Room} Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Room.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Room message.
         * @function verify
         * @memberof message.Room
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Room.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isString(message.RoomId))
                    return "RoomId: string expected";
            return null;
        };

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.Room
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.Room} Room
         */
        Room.fromObject = function fromObject(object) {
            if (object instanceof $root.message.Room)
                return object;
            var message = new $root.message.Room();
            if (object.RoomId != null)
                message.RoomId = String(object.RoomId);
            return message;
        };

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.Room
         * @static
         * @param {message.Room} message Room
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Room.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.RoomId = "";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                object.RoomId = message.RoomId;
            return object;
        };

        /**
         * Converts this Room to JSON.
         * @function toJSON
         * @memberof message.Room
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Room.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Room
         * @function getTypeUrl
         * @memberof message.Room
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Room.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.Room";
        };

        return Room;
    })();

    message.LoginMessage = (function() {

        /**
         * Properties of a LoginMessage.
         * @memberof message
         * @interface ILoginMessage
         * @property {string|null} [UserId] LoginMessage UserId
         * @property {number|null} [PlatformId] LoginMessage PlatformId
         */

        /**
         * Constructs a new LoginMessage.
         * @memberof message
         * @classdesc Represents a LoginMessage.
         * @implements ILoginMessage
         * @constructor
         * @param {message.ILoginMessage=} [properties] Properties to set
         */
        function LoginMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginMessage UserId.
         * @member {string} UserId
         * @memberof message.LoginMessage
         * @instance
         */
        LoginMessage.prototype.UserId = "";

        /**
         * LoginMessage PlatformId.
         * @member {number} PlatformId
         * @memberof message.LoginMessage
         * @instance
         */
        LoginMessage.prototype.PlatformId = 0;

        /**
         * Creates a new LoginMessage instance using the specified properties.
         * @function create
         * @memberof message.LoginMessage
         * @static
         * @param {message.ILoginMessage=} [properties] Properties to set
         * @returns {message.LoginMessage} LoginMessage instance
         */
        LoginMessage.create = function create(properties) {
            return new LoginMessage(properties);
        };

        /**
         * Encodes the specified LoginMessage message. Does not implicitly {@link message.LoginMessage.verify|verify} messages.
         * @function encode
         * @memberof message.LoginMessage
         * @static
         * @param {message.ILoginMessage} message LoginMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserId);
            if (message.PlatformId != null && Object.hasOwnProperty.call(message, "PlatformId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.PlatformId);
            return writer;
        };

        /**
         * Encodes the specified LoginMessage message, length delimited. Does not implicitly {@link message.LoginMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.LoginMessage
         * @static
         * @param {message.ILoginMessage} message LoginMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.LoginMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.LoginMessage} LoginMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.LoginMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.UserId = reader.string();
                        break;
                    }
                case 2: {
                        message.PlatformId = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.LoginMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.LoginMessage} LoginMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginMessage message.
         * @function verify
         * @memberof message.LoginMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isString(message.UserId))
                    return "UserId: string expected";
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                if (!$util.isInteger(message.PlatformId))
                    return "PlatformId: integer expected";
            return null;
        };

        /**
         * Creates a LoginMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.LoginMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.LoginMessage} LoginMessage
         */
        LoginMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.LoginMessage)
                return object;
            var message = new $root.message.LoginMessage();
            if (object.UserId != null)
                message.UserId = String(object.UserId);
            if (object.PlatformId != null)
                message.PlatformId = object.PlatformId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.LoginMessage
         * @static
         * @param {message.LoginMessage} message LoginMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserId = "";
                object.PlatformId = 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                object.UserId = message.UserId;
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                object.PlatformId = message.PlatformId;
            return object;
        };

        /**
         * Converts this LoginMessage to JSON.
         * @function toJSON
         * @memberof message.LoginMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginMessage
         * @function getTypeUrl
         * @memberof message.LoginMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.LoginMessage";
        };

        return LoginMessage;
    })();

    message.LogoutMessage = (function() {

        /**
         * Properties of a LogoutMessage.
         * @memberof message
         * @interface ILogoutMessage
         * @property {string|null} [UserId] LogoutMessage UserId
         * @property {number|null} [PlatformId] LogoutMessage PlatformId
         */

        /**
         * Constructs a new LogoutMessage.
         * @memberof message
         * @classdesc Represents a LogoutMessage.
         * @implements ILogoutMessage
         * @constructor
         * @param {message.ILogoutMessage=} [properties] Properties to set
         */
        function LogoutMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogoutMessage UserId.
         * @member {string} UserId
         * @memberof message.LogoutMessage
         * @instance
         */
        LogoutMessage.prototype.UserId = "";

        /**
         * LogoutMessage PlatformId.
         * @member {number} PlatformId
         * @memberof message.LogoutMessage
         * @instance
         */
        LogoutMessage.prototype.PlatformId = 0;

        /**
         * Creates a new LogoutMessage instance using the specified properties.
         * @function create
         * @memberof message.LogoutMessage
         * @static
         * @param {message.ILogoutMessage=} [properties] Properties to set
         * @returns {message.LogoutMessage} LogoutMessage instance
         */
        LogoutMessage.create = function create(properties) {
            return new LogoutMessage(properties);
        };

        /**
         * Encodes the specified LogoutMessage message. Does not implicitly {@link message.LogoutMessage.verify|verify} messages.
         * @function encode
         * @memberof message.LogoutMessage
         * @static
         * @param {message.ILogoutMessage} message LogoutMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserId);
            if (message.PlatformId != null && Object.hasOwnProperty.call(message, "PlatformId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.PlatformId);
            return writer;
        };

        /**
         * Encodes the specified LogoutMessage message, length delimited. Does not implicitly {@link message.LogoutMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.LogoutMessage
         * @static
         * @param {message.ILogoutMessage} message LogoutMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogoutMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.LogoutMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.LogoutMessage} LogoutMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.LogoutMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.UserId = reader.string();
                        break;
                    }
                case 2: {
                        message.PlatformId = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogoutMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.LogoutMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.LogoutMessage} LogoutMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogoutMessage message.
         * @function verify
         * @memberof message.LogoutMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogoutMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isString(message.UserId))
                    return "UserId: string expected";
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                if (!$util.isInteger(message.PlatformId))
                    return "PlatformId: integer expected";
            return null;
        };

        /**
         * Creates a LogoutMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.LogoutMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.LogoutMessage} LogoutMessage
         */
        LogoutMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.LogoutMessage)
                return object;
            var message = new $root.message.LogoutMessage();
            if (object.UserId != null)
                message.UserId = String(object.UserId);
            if (object.PlatformId != null)
                message.PlatformId = object.PlatformId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LogoutMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.LogoutMessage
         * @static
         * @param {message.LogoutMessage} message LogoutMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogoutMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserId = "";
                object.PlatformId = 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                object.UserId = message.UserId;
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                object.PlatformId = message.PlatformId;
            return object;
        };

        /**
         * Converts this LogoutMessage to JSON.
         * @function toJSON
         * @memberof message.LogoutMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogoutMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LogoutMessage
         * @function getTypeUrl
         * @memberof message.LogoutMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LogoutMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.LogoutMessage";
        };

        return LogoutMessage;
    })();

    message.IMMessage = (function() {

        /**
         * Properties of a IMMessage.
         * @memberof message
         * @interface IIMMessage
         * @property {string|null} [Sender] IMMessage Sender
         * @property {string|null} [Receiver] IMMessage Receiver
         * @property {number|Long|null} [MsgId] IMMessage MsgId
         * @property {number|null} [MsgStatus] IMMessage MsgStatus
         * @property {number|null} [Retract] IMMessage Retract
         * @property {number|Long|null} [RelayTimes] IMMessage RelayTimes
         * @property {number|Long|null} [Timestamp] IMMessage Timestamp
         * @property {string|null} [Content] IMMessage Content
         * @property {number|null} [Flag] IMMessage Flag
         * @property {number|Long|null} [UniqueId] IMMessage UniqueId
         * @property {message.IIMMessage|null} [RefMsg] IMMessage RefMsg
         */

        /**
         * Constructs a new IMMessage.
         * @memberof message
         * @classdesc Represents a IMMessage.
         * @implements IIMMessage
         * @constructor
         * @param {message.IIMMessage=} [properties] Properties to set
         */
        function IMMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IMMessage Sender.
         * @member {string} Sender
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.Sender = "";

        /**
         * IMMessage Receiver.
         * @member {string} Receiver
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.Receiver = "";

        /**
         * IMMessage MsgId.
         * @member {number|Long} MsgId
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.MsgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * IMMessage MsgStatus.
         * @member {number} MsgStatus
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.MsgStatus = 0;

        /**
         * IMMessage Retract.
         * @member {number} Retract
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.Retract = 0;

        /**
         * IMMessage RelayTimes.
         * @member {number|Long} RelayTimes
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.RelayTimes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * IMMessage Timestamp.
         * @member {number|Long} Timestamp
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * IMMessage Content.
         * @member {string} Content
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.Content = "";

        /**
         * IMMessage Flag.
         * @member {number} Flag
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.Flag = 0;

        /**
         * IMMessage UniqueId.
         * @member {number|Long} UniqueId
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.UniqueId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * IMMessage RefMsg.
         * @member {message.IIMMessage|null|undefined} RefMsg
         * @memberof message.IMMessage
         * @instance
         */
        IMMessage.prototype.RefMsg = null;

        /**
         * Creates a new IMMessage instance using the specified properties.
         * @function create
         * @memberof message.IMMessage
         * @static
         * @param {message.IIMMessage=} [properties] Properties to set
         * @returns {message.IMMessage} IMMessage instance
         */
        IMMessage.create = function create(properties) {
            return new IMMessage(properties);
        };

        /**
         * Encodes the specified IMMessage message. Does not implicitly {@link message.IMMessage.verify|verify} messages.
         * @function encode
         * @memberof message.IMMessage
         * @static
         * @param {message.IIMMessage} message IMMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IMMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver);
            if (message.MsgId != null && Object.hasOwnProperty.call(message, "MsgId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.MsgId);
            if (message.MsgStatus != null && Object.hasOwnProperty.call(message, "MsgStatus"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.MsgStatus);
            if (message.Retract != null && Object.hasOwnProperty.call(message, "Retract"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.Retract);
            if (message.RelayTimes != null && Object.hasOwnProperty.call(message, "RelayTimes"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.RelayTimes);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.Timestamp);
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.Content);
            if (message.Flag != null && Object.hasOwnProperty.call(message, "Flag"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.Flag);
            if (message.UniqueId != null && Object.hasOwnProperty.call(message, "UniqueId"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.UniqueId);
            if (message.RefMsg != null && Object.hasOwnProperty.call(message, "RefMsg"))
                $root.message.IMMessage.encode(message.RefMsg, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IMMessage message, length delimited. Does not implicitly {@link message.IMMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.IMMessage
         * @static
         * @param {message.IIMMessage} message IMMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IMMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a IMMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.IMMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.IMMessage} IMMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IMMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.IMMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 3: {
                        message.MsgId = reader.uint64();
                        break;
                    }
                case 4: {
                        message.MsgStatus = reader.uint32();
                        break;
                    }
                case 5: {
                        message.Retract = reader.uint32();
                        break;
                    }
                case 6: {
                        message.RelayTimes = reader.uint64();
                        break;
                    }
                case 7: {
                        message.Timestamp = reader.uint64();
                        break;
                    }
                case 8: {
                        message.Content = reader.string();
                        break;
                    }
                case 9: {
                        message.Flag = reader.uint32();
                        break;
                    }
                case 10: {
                        message.UniqueId = reader.uint64();
                        break;
                    }
                case 11: {
                        message.RefMsg = $root.message.IMMessage.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a IMMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.IMMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.IMMessage} IMMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IMMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a IMMessage message.
         * @function verify
         * @memberof message.IMMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IMMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (!$util.isInteger(message.MsgId) && !(message.MsgId && $util.isInteger(message.MsgId.low) && $util.isInteger(message.MsgId.high)))
                    return "MsgId: integer|Long expected";
            if (message.MsgStatus != null && message.hasOwnProperty("MsgStatus"))
                if (!$util.isInteger(message.MsgStatus))
                    return "MsgStatus: integer expected";
            if (message.Retract != null && message.hasOwnProperty("Retract"))
                if (!$util.isInteger(message.Retract))
                    return "Retract: integer expected";
            if (message.RelayTimes != null && message.hasOwnProperty("RelayTimes"))
                if (!$util.isInteger(message.RelayTimes) && !(message.RelayTimes && $util.isInteger(message.RelayTimes.low) && $util.isInteger(message.RelayTimes.high)))
                    return "RelayTimes: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                if (!$util.isInteger(message.Flag))
                    return "Flag: integer expected";
            if (message.UniqueId != null && message.hasOwnProperty("UniqueId"))
                if (!$util.isInteger(message.UniqueId) && !(message.UniqueId && $util.isInteger(message.UniqueId.low) && $util.isInteger(message.UniqueId.high)))
                    return "UniqueId: integer|Long expected";
            if (message.RefMsg != null && message.hasOwnProperty("RefMsg")) {
                var error = $root.message.IMMessage.verify(message.RefMsg);
                if (error)
                    return "RefMsg." + error;
            }
            return null;
        };

        /**
         * Creates a IMMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.IMMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.IMMessage} IMMessage
         */
        IMMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.IMMessage)
                return object;
            var message = new $root.message.IMMessage();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.MsgId != null)
                if ($util.Long)
                    (message.MsgId = $util.Long.fromValue(object.MsgId)).unsigned = true;
                else if (typeof object.MsgId === "string")
                    message.MsgId = parseInt(object.MsgId, 10);
                else if (typeof object.MsgId === "number")
                    message.MsgId = object.MsgId;
                else if (typeof object.MsgId === "object")
                    message.MsgId = new $util.LongBits(object.MsgId.low >>> 0, object.MsgId.high >>> 0).toNumber(true);
            if (object.MsgStatus != null)
                message.MsgStatus = object.MsgStatus >>> 0;
            if (object.Retract != null)
                message.Retract = object.Retract >>> 0;
            if (object.RelayTimes != null)
                if ($util.Long)
                    (message.RelayTimes = $util.Long.fromValue(object.RelayTimes)).unsigned = true;
                else if (typeof object.RelayTimes === "string")
                    message.RelayTimes = parseInt(object.RelayTimes, 10);
                else if (typeof object.RelayTimes === "number")
                    message.RelayTimes = object.RelayTimes;
                else if (typeof object.RelayTimes === "object")
                    message.RelayTimes = new $util.LongBits(object.RelayTimes.low >>> 0, object.RelayTimes.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.Flag != null)
                message.Flag = object.Flag >>> 0;
            if (object.UniqueId != null)
                if ($util.Long)
                    (message.UniqueId = $util.Long.fromValue(object.UniqueId)).unsigned = true;
                else if (typeof object.UniqueId === "string")
                    message.UniqueId = parseInt(object.UniqueId, 10);
                else if (typeof object.UniqueId === "number")
                    message.UniqueId = object.UniqueId;
                else if (typeof object.UniqueId === "object")
                    message.UniqueId = new $util.LongBits(object.UniqueId.low >>> 0, object.UniqueId.high >>> 0).toNumber(true);
            if (object.RefMsg != null) {
                if (typeof object.RefMsg !== "object")
                    throw TypeError(".message.IMMessage.RefMsg: object expected");
                message.RefMsg = $root.message.IMMessage.fromObject(object.RefMsg);
            }
            return message;
        };

        /**
         * Creates a plain object from a IMMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.IMMessage
         * @static
         * @param {message.IMMessage} message IMMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IMMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Sender = "";
                object.Receiver = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MsgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MsgId = options.longs === String ? "0" : 0;
                object.MsgStatus = 0;
                object.Retract = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.RelayTimes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RelayTimes = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.Content = "";
                object.Flag = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UniqueId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UniqueId = options.longs === String ? "0" : 0;
                object.RefMsg = null;
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (typeof message.MsgId === "number")
                    object.MsgId = options.longs === String ? String(message.MsgId) : message.MsgId;
                else
                    object.MsgId = options.longs === String ? $util.Long.prototype.toString.call(message.MsgId) : options.longs === Number ? new $util.LongBits(message.MsgId.low >>> 0, message.MsgId.high >>> 0).toNumber(true) : message.MsgId;
            if (message.MsgStatus != null && message.hasOwnProperty("MsgStatus"))
                object.MsgStatus = message.MsgStatus;
            if (message.Retract != null && message.hasOwnProperty("Retract"))
                object.Retract = message.Retract;
            if (message.RelayTimes != null && message.hasOwnProperty("RelayTimes"))
                if (typeof message.RelayTimes === "number")
                    object.RelayTimes = options.longs === String ? String(message.RelayTimes) : message.RelayTimes;
                else
                    object.RelayTimes = options.longs === String ? $util.Long.prototype.toString.call(message.RelayTimes) : options.longs === Number ? new $util.LongBits(message.RelayTimes.low >>> 0, message.RelayTimes.high >>> 0).toNumber(true) : message.RelayTimes;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = message.Flag;
            if (message.UniqueId != null && message.hasOwnProperty("UniqueId"))
                if (typeof message.UniqueId === "number")
                    object.UniqueId = options.longs === String ? String(message.UniqueId) : message.UniqueId;
                else
                    object.UniqueId = options.longs === String ? $util.Long.prototype.toString.call(message.UniqueId) : options.longs === Number ? new $util.LongBits(message.UniqueId.low >>> 0, message.UniqueId.high >>> 0).toNumber(true) : message.UniqueId;
            if (message.RefMsg != null && message.hasOwnProperty("RefMsg"))
                object.RefMsg = $root.message.IMMessage.toObject(message.RefMsg, options);
            return object;
        };

        /**
         * Converts this IMMessage to JSON.
         * @function toJSON
         * @memberof message.IMMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IMMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IMMessage
         * @function getTypeUrl
         * @memberof message.IMMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IMMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.IMMessage";
        };

        return IMMessage;
    })();

    message.PluginMessage = (function() {

        /**
         * Properties of a PluginMessage.
         * @memberof message
         * @interface IPluginMessage
         * @property {string|null} [Sender] PluginMessage Sender
         * @property {string|null} [Receiver] PluginMessage Receiver
         * @property {number|null} [Type] PluginMessage Type
         * @property {string|null} [Command] PluginMessage Command
         * @property {number|null} [Reply] PluginMessage Reply
         */

        /**
         * Constructs a new PluginMessage.
         * @memberof message
         * @classdesc Represents a PluginMessage.
         * @implements IPluginMessage
         * @constructor
         * @param {message.IPluginMessage=} [properties] Properties to set
         */
        function PluginMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PluginMessage Sender.
         * @member {string} Sender
         * @memberof message.PluginMessage
         * @instance
         */
        PluginMessage.prototype.Sender = "";

        /**
         * PluginMessage Receiver.
         * @member {string} Receiver
         * @memberof message.PluginMessage
         * @instance
         */
        PluginMessage.prototype.Receiver = "";

        /**
         * PluginMessage Type.
         * @member {number} Type
         * @memberof message.PluginMessage
         * @instance
         */
        PluginMessage.prototype.Type = 0;

        /**
         * PluginMessage Command.
         * @member {string} Command
         * @memberof message.PluginMessage
         * @instance
         */
        PluginMessage.prototype.Command = "";

        /**
         * PluginMessage Reply.
         * @member {number} Reply
         * @memberof message.PluginMessage
         * @instance
         */
        PluginMessage.prototype.Reply = 0;

        /**
         * Creates a new PluginMessage instance using the specified properties.
         * @function create
         * @memberof message.PluginMessage
         * @static
         * @param {message.IPluginMessage=} [properties] Properties to set
         * @returns {message.PluginMessage} PluginMessage instance
         */
        PluginMessage.create = function create(properties) {
            return new PluginMessage(properties);
        };

        /**
         * Encodes the specified PluginMessage message. Does not implicitly {@link message.PluginMessage.verify|verify} messages.
         * @function encode
         * @memberof message.PluginMessage
         * @static
         * @param {message.IPluginMessage} message PluginMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.Type);
            if (message.Command != null && Object.hasOwnProperty.call(message, "Command"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Command);
            if (message.Reply != null && Object.hasOwnProperty.call(message, "Reply"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.Reply);
            return writer;
        };

        /**
         * Encodes the specified PluginMessage message, length delimited. Does not implicitly {@link message.PluginMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.PluginMessage
         * @static
         * @param {message.IPluginMessage} message PluginMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PluginMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PluginMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.PluginMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.PluginMessage} PluginMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.PluginMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 3: {
                        message.Type = reader.uint32();
                        break;
                    }
                case 4: {
                        message.Command = reader.string();
                        break;
                    }
                case 5: {
                        message.Reply = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PluginMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.PluginMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.PluginMessage} PluginMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PluginMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PluginMessage message.
         * @function verify
         * @memberof message.PluginMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PluginMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Command != null && message.hasOwnProperty("Command"))
                if (!$util.isString(message.Command))
                    return "Command: string expected";
            if (message.Reply != null && message.hasOwnProperty("Reply"))
                if (!$util.isInteger(message.Reply))
                    return "Reply: integer expected";
            return null;
        };

        /**
         * Creates a PluginMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.PluginMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.PluginMessage} PluginMessage
         */
        PluginMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.PluginMessage)
                return object;
            var message = new $root.message.PluginMessage();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Command != null)
                message.Command = String(object.Command);
            if (object.Reply != null)
                message.Reply = object.Reply >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PluginMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.PluginMessage
         * @static
         * @param {message.PluginMessage} message PluginMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PluginMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Sender = "";
                object.Receiver = "";
                object.Type = 0;
                object.Command = "";
                object.Reply = 0;
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Command != null && message.hasOwnProperty("Command"))
                object.Command = message.Command;
            if (message.Reply != null && message.hasOwnProperty("Reply"))
                object.Reply = message.Reply;
            return object;
        };

        /**
         * Converts this PluginMessage to JSON.
         * @function toJSON
         * @memberof message.PluginMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PluginMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PluginMessage
         * @function getTypeUrl
         * @memberof message.PluginMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PluginMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.PluginMessage";
        };

        return PluginMessage;
    })();

    message.OrderMessage = (function() {

        /**
         * Properties of an OrderMessage.
         * @memberof message
         * @interface IOrderMessage
         * @property {string|null} [Sender] OrderMessage Sender
         * @property {Array.<string>|null} [Receiver] OrderMessage Receiver
         * @property {message.IOrderCommand|null} [OrderCommand] OrderMessage OrderCommand
         * @property {number|null} [Type] OrderMessage Type
         */

        /**
         * Constructs a new OrderMessage.
         * @memberof message
         * @classdesc Represents an OrderMessage.
         * @implements IOrderMessage
         * @constructor
         * @param {message.IOrderMessage=} [properties] Properties to set
         */
        function OrderMessage(properties) {
            this.Receiver = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderMessage Sender.
         * @member {string} Sender
         * @memberof message.OrderMessage
         * @instance
         */
        OrderMessage.prototype.Sender = "";

        /**
         * OrderMessage Receiver.
         * @member {Array.<string>} Receiver
         * @memberof message.OrderMessage
         * @instance
         */
        OrderMessage.prototype.Receiver = $util.emptyArray;

        /**
         * OrderMessage OrderCommand.
         * @member {message.IOrderCommand|null|undefined} OrderCommand
         * @memberof message.OrderMessage
         * @instance
         */
        OrderMessage.prototype.OrderCommand = null;

        /**
         * OrderMessage Type.
         * @member {number} Type
         * @memberof message.OrderMessage
         * @instance
         */
        OrderMessage.prototype.Type = 0;

        /**
         * Creates a new OrderMessage instance using the specified properties.
         * @function create
         * @memberof message.OrderMessage
         * @static
         * @param {message.IOrderMessage=} [properties] Properties to set
         * @returns {message.OrderMessage} OrderMessage instance
         */
        OrderMessage.create = function create(properties) {
            return new OrderMessage(properties);
        };

        /**
         * Encodes the specified OrderMessage message. Does not implicitly {@link message.OrderMessage.verify|verify} messages.
         * @function encode
         * @memberof message.OrderMessage
         * @static
         * @param {message.IOrderMessage} message OrderMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.Receiver != null && message.Receiver.length)
                for (var i = 0; i < message.Receiver.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver[i]);
            if (message.OrderCommand != null && Object.hasOwnProperty.call(message, "OrderCommand"))
                $root.message.OrderCommand.encode(message.OrderCommand, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.Type);
            return writer;
        };

        /**
         * Encodes the specified OrderMessage message, length delimited. Does not implicitly {@link message.OrderMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.OrderMessage
         * @static
         * @param {message.IOrderMessage} message OrderMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.OrderMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.OrderMessage} OrderMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.OrderMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.Receiver && message.Receiver.length))
                            message.Receiver = [];
                        message.Receiver.push(reader.string());
                        break;
                    }
                case 3: {
                        message.OrderCommand = $root.message.OrderCommand.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.Type = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.OrderMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.OrderMessage} OrderMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderMessage message.
         * @function verify
         * @memberof message.OrderMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver")) {
                if (!Array.isArray(message.Receiver))
                    return "Receiver: array expected";
                for (var i = 0; i < message.Receiver.length; ++i)
                    if (!$util.isString(message.Receiver[i]))
                        return "Receiver: string[] expected";
            }
            if (message.OrderCommand != null && message.hasOwnProperty("OrderCommand")) {
                var error = $root.message.OrderCommand.verify(message.OrderCommand);
                if (error)
                    return "OrderCommand." + error;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            return null;
        };

        /**
         * Creates an OrderMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.OrderMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.OrderMessage} OrderMessage
         */
        OrderMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.OrderMessage)
                return object;
            var message = new $root.message.OrderMessage();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver) {
                if (!Array.isArray(object.Receiver))
                    throw TypeError(".message.OrderMessage.Receiver: array expected");
                message.Receiver = [];
                for (var i = 0; i < object.Receiver.length; ++i)
                    message.Receiver[i] = String(object.Receiver[i]);
            }
            if (object.OrderCommand != null) {
                if (typeof object.OrderCommand !== "object")
                    throw TypeError(".message.OrderMessage.OrderCommand: object expected");
                message.OrderCommand = $root.message.OrderCommand.fromObject(object.OrderCommand);
            }
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an OrderMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.OrderMessage
         * @static
         * @param {message.OrderMessage} message OrderMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Receiver = [];
            if (options.defaults) {
                object.Sender = "";
                object.OrderCommand = null;
                object.Type = 0;
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver && message.Receiver.length) {
                object.Receiver = [];
                for (var j = 0; j < message.Receiver.length; ++j)
                    object.Receiver[j] = message.Receiver[j];
            }
            if (message.OrderCommand != null && message.hasOwnProperty("OrderCommand"))
                object.OrderCommand = $root.message.OrderCommand.toObject(message.OrderCommand, options);
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            return object;
        };

        /**
         * Converts this OrderMessage to JSON.
         * @function toJSON
         * @memberof message.OrderMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OrderMessage
         * @function getTypeUrl
         * @memberof message.OrderMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OrderMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.OrderMessage";
        };

        return OrderMessage;
    })();

    message.OrderSaveMessage = (function() {

        /**
         * Properties of an OrderSaveMessage.
         * @memberof message
         * @interface IOrderSaveMessage
         * @property {string|null} [SenderUserId] OrderSaveMessage SenderUserId
         * @property {Array.<string>|null} [Receiver] OrderSaveMessage Receiver
         * @property {message.IOrderCommand|null} [OrderCmd] OrderSaveMessage OrderCmd
         * @property {number|null} [Reply] OrderSaveMessage Reply
         */

        /**
         * Constructs a new OrderSaveMessage.
         * @memberof message
         * @classdesc Represents an OrderSaveMessage.
         * @implements IOrderSaveMessage
         * @constructor
         * @param {message.IOrderSaveMessage=} [properties] Properties to set
         */
        function OrderSaveMessage(properties) {
            this.Receiver = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderSaveMessage SenderUserId.
         * @member {string} SenderUserId
         * @memberof message.OrderSaveMessage
         * @instance
         */
        OrderSaveMessage.prototype.SenderUserId = "";

        /**
         * OrderSaveMessage Receiver.
         * @member {Array.<string>} Receiver
         * @memberof message.OrderSaveMessage
         * @instance
         */
        OrderSaveMessage.prototype.Receiver = $util.emptyArray;

        /**
         * OrderSaveMessage OrderCmd.
         * @member {message.IOrderCommand|null|undefined} OrderCmd
         * @memberof message.OrderSaveMessage
         * @instance
         */
        OrderSaveMessage.prototype.OrderCmd = null;

        /**
         * OrderSaveMessage Reply.
         * @member {number} Reply
         * @memberof message.OrderSaveMessage
         * @instance
         */
        OrderSaveMessage.prototype.Reply = 0;

        /**
         * Creates a new OrderSaveMessage instance using the specified properties.
         * @function create
         * @memberof message.OrderSaveMessage
         * @static
         * @param {message.IOrderSaveMessage=} [properties] Properties to set
         * @returns {message.OrderSaveMessage} OrderSaveMessage instance
         */
        OrderSaveMessage.create = function create(properties) {
            return new OrderSaveMessage(properties);
        };

        /**
         * Encodes the specified OrderSaveMessage message. Does not implicitly {@link message.OrderSaveMessage.verify|verify} messages.
         * @function encode
         * @memberof message.OrderSaveMessage
         * @static
         * @param {message.IOrderSaveMessage} message OrderSaveMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderSaveMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SenderUserId != null && Object.hasOwnProperty.call(message, "SenderUserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.SenderUserId);
            if (message.Receiver != null && message.Receiver.length)
                for (var i = 0; i < message.Receiver.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver[i]);
            if (message.OrderCmd != null && Object.hasOwnProperty.call(message, "OrderCmd"))
                $root.message.OrderCommand.encode(message.OrderCmd, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Reply != null && Object.hasOwnProperty.call(message, "Reply"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.Reply);
            return writer;
        };

        /**
         * Encodes the specified OrderSaveMessage message, length delimited. Does not implicitly {@link message.OrderSaveMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.OrderSaveMessage
         * @static
         * @param {message.IOrderSaveMessage} message OrderSaveMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderSaveMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderSaveMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.OrderSaveMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.OrderSaveMessage} OrderSaveMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderSaveMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.OrderSaveMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.SenderUserId = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.Receiver && message.Receiver.length))
                            message.Receiver = [];
                        message.Receiver.push(reader.string());
                        break;
                    }
                case 3: {
                        message.OrderCmd = $root.message.OrderCommand.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.Reply = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderSaveMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.OrderSaveMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.OrderSaveMessage} OrderSaveMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderSaveMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderSaveMessage message.
         * @function verify
         * @memberof message.OrderSaveMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderSaveMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SenderUserId != null && message.hasOwnProperty("SenderUserId"))
                if (!$util.isString(message.SenderUserId))
                    return "SenderUserId: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver")) {
                if (!Array.isArray(message.Receiver))
                    return "Receiver: array expected";
                for (var i = 0; i < message.Receiver.length; ++i)
                    if (!$util.isString(message.Receiver[i]))
                        return "Receiver: string[] expected";
            }
            if (message.OrderCmd != null && message.hasOwnProperty("OrderCmd")) {
                var error = $root.message.OrderCommand.verify(message.OrderCmd);
                if (error)
                    return "OrderCmd." + error;
            }
            if (message.Reply != null && message.hasOwnProperty("Reply"))
                if (!$util.isInteger(message.Reply))
                    return "Reply: integer expected";
            return null;
        };

        /**
         * Creates an OrderSaveMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.OrderSaveMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.OrderSaveMessage} OrderSaveMessage
         */
        OrderSaveMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.OrderSaveMessage)
                return object;
            var message = new $root.message.OrderSaveMessage();
            if (object.SenderUserId != null)
                message.SenderUserId = String(object.SenderUserId);
            if (object.Receiver) {
                if (!Array.isArray(object.Receiver))
                    throw TypeError(".message.OrderSaveMessage.Receiver: array expected");
                message.Receiver = [];
                for (var i = 0; i < object.Receiver.length; ++i)
                    message.Receiver[i] = String(object.Receiver[i]);
            }
            if (object.OrderCmd != null) {
                if (typeof object.OrderCmd !== "object")
                    throw TypeError(".message.OrderSaveMessage.OrderCmd: object expected");
                message.OrderCmd = $root.message.OrderCommand.fromObject(object.OrderCmd);
            }
            if (object.Reply != null)
                message.Reply = object.Reply >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an OrderSaveMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.OrderSaveMessage
         * @static
         * @param {message.OrderSaveMessage} message OrderSaveMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderSaveMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Receiver = [];
            if (options.defaults) {
                object.SenderUserId = "";
                object.OrderCmd = null;
                object.Reply = 0;
            }
            if (message.SenderUserId != null && message.hasOwnProperty("SenderUserId"))
                object.SenderUserId = message.SenderUserId;
            if (message.Receiver && message.Receiver.length) {
                object.Receiver = [];
                for (var j = 0; j < message.Receiver.length; ++j)
                    object.Receiver[j] = message.Receiver[j];
            }
            if (message.OrderCmd != null && message.hasOwnProperty("OrderCmd"))
                object.OrderCmd = $root.message.OrderCommand.toObject(message.OrderCmd, options);
            if (message.Reply != null && message.hasOwnProperty("Reply"))
                object.Reply = message.Reply;
            return object;
        };

        /**
         * Converts this OrderSaveMessage to JSON.
         * @function toJSON
         * @memberof message.OrderSaveMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderSaveMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OrderSaveMessage
         * @function getTypeUrl
         * @memberof message.OrderSaveMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OrderSaveMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.OrderSaveMessage";
        };

        return OrderSaveMessage;
    })();

    message.OrderCommand = (function() {

        /**
         * Properties of an OrderCommand.
         * @memberof message
         * @interface IOrderCommand
         * @property {number|null} [Flag] OrderCommand Flag
         * @property {Array.<string>|null} [CallUser] OrderCommand CallUser
         * @property {string|null} [Room] OrderCommand Room
         * @property {string|null} [Group] OrderCommand Group
         * @property {number|null} [Reply] OrderCommand Reply
         * @property {string|null} [Command] OrderCommand Command
         */

        /**
         * Constructs a new OrderCommand.
         * @memberof message
         * @classdesc Represents an OrderCommand.
         * @implements IOrderCommand
         * @constructor
         * @param {message.IOrderCommand=} [properties] Properties to set
         */
        function OrderCommand(properties) {
            this.CallUser = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderCommand Flag.
         * @member {number} Flag
         * @memberof message.OrderCommand
         * @instance
         */
        OrderCommand.prototype.Flag = 0;

        /**
         * OrderCommand CallUser.
         * @member {Array.<string>} CallUser
         * @memberof message.OrderCommand
         * @instance
         */
        OrderCommand.prototype.CallUser = $util.emptyArray;

        /**
         * OrderCommand Room.
         * @member {string} Room
         * @memberof message.OrderCommand
         * @instance
         */
        OrderCommand.prototype.Room = "";

        /**
         * OrderCommand Group.
         * @member {string} Group
         * @memberof message.OrderCommand
         * @instance
         */
        OrderCommand.prototype.Group = "";

        /**
         * OrderCommand Reply.
         * @member {number} Reply
         * @memberof message.OrderCommand
         * @instance
         */
        OrderCommand.prototype.Reply = 0;

        /**
         * OrderCommand Command.
         * @member {string} Command
         * @memberof message.OrderCommand
         * @instance
         */
        OrderCommand.prototype.Command = "";

        /**
         * Creates a new OrderCommand instance using the specified properties.
         * @function create
         * @memberof message.OrderCommand
         * @static
         * @param {message.IOrderCommand=} [properties] Properties to set
         * @returns {message.OrderCommand} OrderCommand instance
         */
        OrderCommand.create = function create(properties) {
            return new OrderCommand(properties);
        };

        /**
         * Encodes the specified OrderCommand message. Does not implicitly {@link message.OrderCommand.verify|verify} messages.
         * @function encode
         * @memberof message.OrderCommand
         * @static
         * @param {message.IOrderCommand} message OrderCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Flag != null && Object.hasOwnProperty.call(message, "Flag"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Flag);
            if (message.CallUser != null && message.CallUser.length)
                for (var i = 0; i < message.CallUser.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.CallUser[i]);
            if (message.Room != null && Object.hasOwnProperty.call(message, "Room"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Room);
            if (message.Group != null && Object.hasOwnProperty.call(message, "Group"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Group);
            if (message.Reply != null && Object.hasOwnProperty.call(message, "Reply"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.Reply);
            if (message.Command != null && Object.hasOwnProperty.call(message, "Command"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Command);
            return writer;
        };

        /**
         * Encodes the specified OrderCommand message, length delimited. Does not implicitly {@link message.OrderCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.OrderCommand
         * @static
         * @param {message.IOrderCommand} message OrderCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderCommand message from the specified reader or buffer.
         * @function decode
         * @memberof message.OrderCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.OrderCommand} OrderCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.OrderCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Flag = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.CallUser && message.CallUser.length))
                            message.CallUser = [];
                        message.CallUser.push(reader.string());
                        break;
                    }
                case 3: {
                        message.Room = reader.string();
                        break;
                    }
                case 4: {
                        message.Group = reader.string();
                        break;
                    }
                case 5: {
                        message.Reply = reader.uint32();
                        break;
                    }
                case 6: {
                        message.Command = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.OrderCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.OrderCommand} OrderCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderCommand message.
         * @function verify
         * @memberof message.OrderCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                if (!$util.isInteger(message.Flag))
                    return "Flag: integer expected";
            if (message.CallUser != null && message.hasOwnProperty("CallUser")) {
                if (!Array.isArray(message.CallUser))
                    return "CallUser: array expected";
                for (var i = 0; i < message.CallUser.length; ++i)
                    if (!$util.isString(message.CallUser[i]))
                        return "CallUser: string[] expected";
            }
            if (message.Room != null && message.hasOwnProperty("Room"))
                if (!$util.isString(message.Room))
                    return "Room: string expected";
            if (message.Group != null && message.hasOwnProperty("Group"))
                if (!$util.isString(message.Group))
                    return "Group: string expected";
            if (message.Reply != null && message.hasOwnProperty("Reply"))
                if (!$util.isInteger(message.Reply))
                    return "Reply: integer expected";
            if (message.Command != null && message.hasOwnProperty("Command"))
                if (!$util.isString(message.Command))
                    return "Command: string expected";
            return null;
        };

        /**
         * Creates an OrderCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.OrderCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.OrderCommand} OrderCommand
         */
        OrderCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.message.OrderCommand)
                return object;
            var message = new $root.message.OrderCommand();
            if (object.Flag != null)
                message.Flag = object.Flag >>> 0;
            if (object.CallUser) {
                if (!Array.isArray(object.CallUser))
                    throw TypeError(".message.OrderCommand.CallUser: array expected");
                message.CallUser = [];
                for (var i = 0; i < object.CallUser.length; ++i)
                    message.CallUser[i] = String(object.CallUser[i]);
            }
            if (object.Room != null)
                message.Room = String(object.Room);
            if (object.Group != null)
                message.Group = String(object.Group);
            if (object.Reply != null)
                message.Reply = object.Reply >>> 0;
            if (object.Command != null)
                message.Command = String(object.Command);
            return message;
        };

        /**
         * Creates a plain object from an OrderCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.OrderCommand
         * @static
         * @param {message.OrderCommand} message OrderCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.CallUser = [];
            if (options.defaults) {
                object.Flag = 0;
                object.Room = "";
                object.Group = "";
                object.Reply = 0;
                object.Command = "";
            }
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = message.Flag;
            if (message.CallUser && message.CallUser.length) {
                object.CallUser = [];
                for (var j = 0; j < message.CallUser.length; ++j)
                    object.CallUser[j] = message.CallUser[j];
            }
            if (message.Room != null && message.hasOwnProperty("Room"))
                object.Room = message.Room;
            if (message.Group != null && message.hasOwnProperty("Group"))
                object.Group = message.Group;
            if (message.Reply != null && message.hasOwnProperty("Reply"))
                object.Reply = message.Reply;
            if (message.Command != null && message.hasOwnProperty("Command"))
                object.Command = message.Command;
            return object;
        };

        /**
         * Converts this OrderCommand to JSON.
         * @function toJSON
         * @memberof message.OrderCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OrderCommand
         * @function getTypeUrl
         * @memberof message.OrderCommand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OrderCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.OrderCommand";
        };

        return OrderCommand;
    })();

    message.RelayMessage = (function() {

        /**
         * Properties of a RelayMessage.
         * @memberof message
         * @interface IRelayMessage
         * @property {number|null} [Retract] RelayMessage Retract
         * @property {number|null} [Type] RelayMessage Type
         * @property {string|null} [Sender] RelayMessage Sender
         * @property {Array.<message.IRelayUserInfo>|null} [MessageByPeer] RelayMessage MessageByPeer
         * @property {Array.<message.IRelayGroupInfo>|null} [MessageByGroup] RelayMessage MessageByGroup
         * @property {Array.<string>|null} [ReceiverPeer] RelayMessage ReceiverPeer
         * @property {Array.<string>|null} [ReceiverGroup] RelayMessage ReceiverGroup
         * @property {number|Long|null} [Timestamp] RelayMessage Timestamp
         * @property {number|Long|null} [UniqueId] RelayMessage UniqueId
         */

        /**
         * Constructs a new RelayMessage.
         * @memberof message
         * @classdesc Represents a RelayMessage.
         * @implements IRelayMessage
         * @constructor
         * @param {message.IRelayMessage=} [properties] Properties to set
         */
        function RelayMessage(properties) {
            this.MessageByPeer = [];
            this.MessageByGroup = [];
            this.ReceiverPeer = [];
            this.ReceiverGroup = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RelayMessage Retract.
         * @member {number} Retract
         * @memberof message.RelayMessage
         * @instance
         */
        RelayMessage.prototype.Retract = 0;

        /**
         * RelayMessage Type.
         * @member {number} Type
         * @memberof message.RelayMessage
         * @instance
         */
        RelayMessage.prototype.Type = 0;

        /**
         * RelayMessage Sender.
         * @member {string} Sender
         * @memberof message.RelayMessage
         * @instance
         */
        RelayMessage.prototype.Sender = "";

        /**
         * RelayMessage MessageByPeer.
         * @member {Array.<message.IRelayUserInfo>} MessageByPeer
         * @memberof message.RelayMessage
         * @instance
         */
        RelayMessage.prototype.MessageByPeer = $util.emptyArray;

        /**
         * RelayMessage MessageByGroup.
         * @member {Array.<message.IRelayGroupInfo>} MessageByGroup
         * @memberof message.RelayMessage
         * @instance
         */
        RelayMessage.prototype.MessageByGroup = $util.emptyArray;

        /**
         * RelayMessage ReceiverPeer.
         * @member {Array.<string>} ReceiverPeer
         * @memberof message.RelayMessage
         * @instance
         */
        RelayMessage.prototype.ReceiverPeer = $util.emptyArray;

        /**
         * RelayMessage ReceiverGroup.
         * @member {Array.<string>} ReceiverGroup
         * @memberof message.RelayMessage
         * @instance
         */
        RelayMessage.prototype.ReceiverGroup = $util.emptyArray;

        /**
         * RelayMessage Timestamp.
         * @member {number|Long} Timestamp
         * @memberof message.RelayMessage
         * @instance
         */
        RelayMessage.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RelayMessage UniqueId.
         * @member {number|Long} UniqueId
         * @memberof message.RelayMessage
         * @instance
         */
        RelayMessage.prototype.UniqueId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new RelayMessage instance using the specified properties.
         * @function create
         * @memberof message.RelayMessage
         * @static
         * @param {message.IRelayMessage=} [properties] Properties to set
         * @returns {message.RelayMessage} RelayMessage instance
         */
        RelayMessage.create = function create(properties) {
            return new RelayMessage(properties);
        };

        /**
         * Encodes the specified RelayMessage message. Does not implicitly {@link message.RelayMessage.verify|verify} messages.
         * @function encode
         * @memberof message.RelayMessage
         * @static
         * @param {message.IRelayMessage} message RelayMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RelayMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Retract != null && Object.hasOwnProperty.call(message, "Retract"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Retract);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Type);
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Sender);
            if (message.MessageByPeer != null && message.MessageByPeer.length)
                for (var i = 0; i < message.MessageByPeer.length; ++i)
                    $root.message.RelayUserInfo.encode(message.MessageByPeer[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.MessageByGroup != null && message.MessageByGroup.length)
                for (var i = 0; i < message.MessageByGroup.length; ++i)
                    $root.message.RelayGroupInfo.encode(message.MessageByGroup[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.ReceiverPeer != null && message.ReceiverPeer.length)
                for (var i = 0; i < message.ReceiverPeer.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.ReceiverPeer[i]);
            if (message.ReceiverGroup != null && message.ReceiverGroup.length)
                for (var i = 0; i < message.ReceiverGroup.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.ReceiverGroup[i]);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.Timestamp);
            if (message.UniqueId != null && Object.hasOwnProperty.call(message, "UniqueId"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.UniqueId);
            return writer;
        };

        /**
         * Encodes the specified RelayMessage message, length delimited. Does not implicitly {@link message.RelayMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.RelayMessage
         * @static
         * @param {message.IRelayMessage} message RelayMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RelayMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RelayMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.RelayMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.RelayMessage} RelayMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RelayMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RelayMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Retract = reader.uint32();
                        break;
                    }
                case 2: {
                        message.Type = reader.uint32();
                        break;
                    }
                case 3: {
                        message.Sender = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.MessageByPeer && message.MessageByPeer.length))
                            message.MessageByPeer = [];
                        message.MessageByPeer.push($root.message.RelayUserInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.MessageByGroup && message.MessageByGroup.length))
                            message.MessageByGroup = [];
                        message.MessageByGroup.push($root.message.RelayGroupInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        if (!(message.ReceiverPeer && message.ReceiverPeer.length))
                            message.ReceiverPeer = [];
                        message.ReceiverPeer.push(reader.string());
                        break;
                    }
                case 7: {
                        if (!(message.ReceiverGroup && message.ReceiverGroup.length))
                            message.ReceiverGroup = [];
                        message.ReceiverGroup.push(reader.string());
                        break;
                    }
                case 8: {
                        message.Timestamp = reader.uint64();
                        break;
                    }
                case 9: {
                        message.UniqueId = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RelayMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.RelayMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.RelayMessage} RelayMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RelayMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RelayMessage message.
         * @function verify
         * @memberof message.RelayMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RelayMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Retract != null && message.hasOwnProperty("Retract"))
                if (!$util.isInteger(message.Retract))
                    return "Retract: integer expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.MessageByPeer != null && message.hasOwnProperty("MessageByPeer")) {
                if (!Array.isArray(message.MessageByPeer))
                    return "MessageByPeer: array expected";
                for (var i = 0; i < message.MessageByPeer.length; ++i) {
                    var error = $root.message.RelayUserInfo.verify(message.MessageByPeer[i]);
                    if (error)
                        return "MessageByPeer." + error;
                }
            }
            if (message.MessageByGroup != null && message.hasOwnProperty("MessageByGroup")) {
                if (!Array.isArray(message.MessageByGroup))
                    return "MessageByGroup: array expected";
                for (var i = 0; i < message.MessageByGroup.length; ++i) {
                    var error = $root.message.RelayGroupInfo.verify(message.MessageByGroup[i]);
                    if (error)
                        return "MessageByGroup." + error;
                }
            }
            if (message.ReceiverPeer != null && message.hasOwnProperty("ReceiverPeer")) {
                if (!Array.isArray(message.ReceiverPeer))
                    return "ReceiverPeer: array expected";
                for (var i = 0; i < message.ReceiverPeer.length; ++i)
                    if (!$util.isString(message.ReceiverPeer[i]))
                        return "ReceiverPeer: string[] expected";
            }
            if (message.ReceiverGroup != null && message.hasOwnProperty("ReceiverGroup")) {
                if (!Array.isArray(message.ReceiverGroup))
                    return "ReceiverGroup: array expected";
                for (var i = 0; i < message.ReceiverGroup.length; ++i)
                    if (!$util.isString(message.ReceiverGroup[i]))
                        return "ReceiverGroup: string[] expected";
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.UniqueId != null && message.hasOwnProperty("UniqueId"))
                if (!$util.isInteger(message.UniqueId) && !(message.UniqueId && $util.isInteger(message.UniqueId.low) && $util.isInteger(message.UniqueId.high)))
                    return "UniqueId: integer|Long expected";
            return null;
        };

        /**
         * Creates a RelayMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RelayMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.RelayMessage} RelayMessage
         */
        RelayMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.RelayMessage)
                return object;
            var message = new $root.message.RelayMessage();
            if (object.Retract != null)
                message.Retract = object.Retract >>> 0;
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.MessageByPeer) {
                if (!Array.isArray(object.MessageByPeer))
                    throw TypeError(".message.RelayMessage.MessageByPeer: array expected");
                message.MessageByPeer = [];
                for (var i = 0; i < object.MessageByPeer.length; ++i) {
                    if (typeof object.MessageByPeer[i] !== "object")
                        throw TypeError(".message.RelayMessage.MessageByPeer: object expected");
                    message.MessageByPeer[i] = $root.message.RelayUserInfo.fromObject(object.MessageByPeer[i]);
                }
            }
            if (object.MessageByGroup) {
                if (!Array.isArray(object.MessageByGroup))
                    throw TypeError(".message.RelayMessage.MessageByGroup: array expected");
                message.MessageByGroup = [];
                for (var i = 0; i < object.MessageByGroup.length; ++i) {
                    if (typeof object.MessageByGroup[i] !== "object")
                        throw TypeError(".message.RelayMessage.MessageByGroup: object expected");
                    message.MessageByGroup[i] = $root.message.RelayGroupInfo.fromObject(object.MessageByGroup[i]);
                }
            }
            if (object.ReceiverPeer) {
                if (!Array.isArray(object.ReceiverPeer))
                    throw TypeError(".message.RelayMessage.ReceiverPeer: array expected");
                message.ReceiverPeer = [];
                for (var i = 0; i < object.ReceiverPeer.length; ++i)
                    message.ReceiverPeer[i] = String(object.ReceiverPeer[i]);
            }
            if (object.ReceiverGroup) {
                if (!Array.isArray(object.ReceiverGroup))
                    throw TypeError(".message.RelayMessage.ReceiverGroup: array expected");
                message.ReceiverGroup = [];
                for (var i = 0; i < object.ReceiverGroup.length; ++i)
                    message.ReceiverGroup[i] = String(object.ReceiverGroup[i]);
            }
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.UniqueId != null)
                if ($util.Long)
                    (message.UniqueId = $util.Long.fromValue(object.UniqueId)).unsigned = true;
                else if (typeof object.UniqueId === "string")
                    message.UniqueId = parseInt(object.UniqueId, 10);
                else if (typeof object.UniqueId === "number")
                    message.UniqueId = object.UniqueId;
                else if (typeof object.UniqueId === "object")
                    message.UniqueId = new $util.LongBits(object.UniqueId.low >>> 0, object.UniqueId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a RelayMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RelayMessage
         * @static
         * @param {message.RelayMessage} message RelayMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RelayMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.MessageByPeer = [];
                object.MessageByGroup = [];
                object.ReceiverPeer = [];
                object.ReceiverGroup = [];
            }
            if (options.defaults) {
                object.Retract = 0;
                object.Type = 0;
                object.Sender = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UniqueId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UniqueId = options.longs === String ? "0" : 0;
            }
            if (message.Retract != null && message.hasOwnProperty("Retract"))
                object.Retract = message.Retract;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.MessageByPeer && message.MessageByPeer.length) {
                object.MessageByPeer = [];
                for (var j = 0; j < message.MessageByPeer.length; ++j)
                    object.MessageByPeer[j] = $root.message.RelayUserInfo.toObject(message.MessageByPeer[j], options);
            }
            if (message.MessageByGroup && message.MessageByGroup.length) {
                object.MessageByGroup = [];
                for (var j = 0; j < message.MessageByGroup.length; ++j)
                    object.MessageByGroup[j] = $root.message.RelayGroupInfo.toObject(message.MessageByGroup[j], options);
            }
            if (message.ReceiverPeer && message.ReceiverPeer.length) {
                object.ReceiverPeer = [];
                for (var j = 0; j < message.ReceiverPeer.length; ++j)
                    object.ReceiverPeer[j] = message.ReceiverPeer[j];
            }
            if (message.ReceiverGroup && message.ReceiverGroup.length) {
                object.ReceiverGroup = [];
                for (var j = 0; j < message.ReceiverGroup.length; ++j)
                    object.ReceiverGroup[j] = message.ReceiverGroup[j];
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.UniqueId != null && message.hasOwnProperty("UniqueId"))
                if (typeof message.UniqueId === "number")
                    object.UniqueId = options.longs === String ? String(message.UniqueId) : message.UniqueId;
                else
                    object.UniqueId = options.longs === String ? $util.Long.prototype.toString.call(message.UniqueId) : options.longs === Number ? new $util.LongBits(message.UniqueId.low >>> 0, message.UniqueId.high >>> 0).toNumber(true) : message.UniqueId;
            return object;
        };

        /**
         * Converts this RelayMessage to JSON.
         * @function toJSON
         * @memberof message.RelayMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RelayMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RelayMessage
         * @function getTypeUrl
         * @memberof message.RelayMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RelayMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.RelayMessage";
        };

        return RelayMessage;
    })();

    message.RoomMessage = (function() {

        /**
         * Properties of a RoomMessage.
         * @memberof message
         * @interface IRoomMessage
         * @property {string|null} [Sender] RoomMessage Sender
         * @property {string|null} [Receiver] RoomMessage Receiver
         * @property {number|Long|null} [Timestamp] RoomMessage Timestamp
         * @property {string|null} [Content] RoomMessage Content
         */

        /**
         * Constructs a new RoomMessage.
         * @memberof message
         * @classdesc Represents a RoomMessage.
         * @implements IRoomMessage
         * @constructor
         * @param {message.IRoomMessage=} [properties] Properties to set
         */
        function RoomMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomMessage Sender.
         * @member {string} Sender
         * @memberof message.RoomMessage
         * @instance
         */
        RoomMessage.prototype.Sender = "";

        /**
         * RoomMessage Receiver.
         * @member {string} Receiver
         * @memberof message.RoomMessage
         * @instance
         */
        RoomMessage.prototype.Receiver = "";

        /**
         * RoomMessage Timestamp.
         * @member {number|Long} Timestamp
         * @memberof message.RoomMessage
         * @instance
         */
        RoomMessage.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RoomMessage Content.
         * @member {string} Content
         * @memberof message.RoomMessage
         * @instance
         */
        RoomMessage.prototype.Content = "";

        /**
         * Creates a new RoomMessage instance using the specified properties.
         * @function create
         * @memberof message.RoomMessage
         * @static
         * @param {message.IRoomMessage=} [properties] Properties to set
         * @returns {message.RoomMessage} RoomMessage instance
         */
        RoomMessage.create = function create(properties) {
            return new RoomMessage(properties);
        };

        /**
         * Encodes the specified RoomMessage message. Does not implicitly {@link message.RoomMessage.verify|verify} messages.
         * @function encode
         * @memberof message.RoomMessage
         * @static
         * @param {message.IRoomMessage} message RoomMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.Timestamp);
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified RoomMessage message, length delimited. Does not implicitly {@link message.RoomMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.RoomMessage
         * @static
         * @param {message.IRoomMessage} message RoomMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.RoomMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.RoomMessage} RoomMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RoomMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 3: {
                        message.Timestamp = reader.uint64();
                        break;
                    }
                case 4: {
                        message.Content = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.RoomMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.RoomMessage} RoomMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomMessage message.
         * @function verify
         * @memberof message.RoomMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a RoomMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RoomMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.RoomMessage} RoomMessage
         */
        RoomMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.RoomMessage)
                return object;
            var message = new $root.message.RoomMessage();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a RoomMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RoomMessage
         * @static
         * @param {message.RoomMessage} message RoomMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Sender = "";
                object.Receiver = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.Content = "";
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this RoomMessage to JSON.
         * @function toJSON
         * @memberof message.RoomMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomMessage
         * @function getTypeUrl
         * @memberof message.RoomMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.RoomMessage";
        };

        return RoomMessage;
    })();

    message.AuthTokenMessage = (function() {

        /**
         * Properties of an AuthTokenMessage.
         * @memberof message
         * @interface IAuthTokenMessage
         * @property {string|null} [UserId] AuthTokenMessage UserId
         * @property {number|null} [PlatformId] AuthTokenMessage PlatformId
         */

        /**
         * Constructs a new AuthTokenMessage.
         * @memberof message
         * @classdesc Represents an AuthTokenMessage.
         * @implements IAuthTokenMessage
         * @constructor
         * @param {message.IAuthTokenMessage=} [properties] Properties to set
         */
        function AuthTokenMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthTokenMessage UserId.
         * @member {string} UserId
         * @memberof message.AuthTokenMessage
         * @instance
         */
        AuthTokenMessage.prototype.UserId = "";

        /**
         * AuthTokenMessage PlatformId.
         * @member {number} PlatformId
         * @memberof message.AuthTokenMessage
         * @instance
         */
        AuthTokenMessage.prototype.PlatformId = 0;

        /**
         * Creates a new AuthTokenMessage instance using the specified properties.
         * @function create
         * @memberof message.AuthTokenMessage
         * @static
         * @param {message.IAuthTokenMessage=} [properties] Properties to set
         * @returns {message.AuthTokenMessage} AuthTokenMessage instance
         */
        AuthTokenMessage.create = function create(properties) {
            return new AuthTokenMessage(properties);
        };

        /**
         * Encodes the specified AuthTokenMessage message. Does not implicitly {@link message.AuthTokenMessage.verify|verify} messages.
         * @function encode
         * @memberof message.AuthTokenMessage
         * @static
         * @param {message.IAuthTokenMessage} message AuthTokenMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthTokenMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserId);
            if (message.PlatformId != null && Object.hasOwnProperty.call(message, "PlatformId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.PlatformId);
            return writer;
        };

        /**
         * Encodes the specified AuthTokenMessage message, length delimited. Does not implicitly {@link message.AuthTokenMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.AuthTokenMessage
         * @static
         * @param {message.IAuthTokenMessage} message AuthTokenMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthTokenMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthTokenMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.AuthTokenMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.AuthTokenMessage} AuthTokenMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthTokenMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.AuthTokenMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.UserId = reader.string();
                        break;
                    }
                case 2: {
                        message.PlatformId = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthTokenMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.AuthTokenMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.AuthTokenMessage} AuthTokenMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthTokenMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthTokenMessage message.
         * @function verify
         * @memberof message.AuthTokenMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthTokenMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isString(message.UserId))
                    return "UserId: string expected";
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                if (!$util.isInteger(message.PlatformId))
                    return "PlatformId: integer expected";
            return null;
        };

        /**
         * Creates an AuthTokenMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.AuthTokenMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.AuthTokenMessage} AuthTokenMessage
         */
        AuthTokenMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.AuthTokenMessage)
                return object;
            var message = new $root.message.AuthTokenMessage();
            if (object.UserId != null)
                message.UserId = String(object.UserId);
            if (object.PlatformId != null)
                message.PlatformId = object.PlatformId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AuthTokenMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.AuthTokenMessage
         * @static
         * @param {message.AuthTokenMessage} message AuthTokenMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthTokenMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserId = "";
                object.PlatformId = 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                object.UserId = message.UserId;
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                object.PlatformId = message.PlatformId;
            return object;
        };

        /**
         * Converts this AuthTokenMessage to JSON.
         * @function toJSON
         * @memberof message.AuthTokenMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthTokenMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthTokenMessage
         * @function getTypeUrl
         * @memberof message.AuthTokenMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthTokenMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.AuthTokenMessage";
        };

        return AuthTokenMessage;
    })();

    message.AuthStatusMessage = (function() {

        /**
         * Properties of an AuthStatusMessage.
         * @memberof message
         * @interface IAuthStatusMessage
         * @property {string|null} [UserId] AuthStatusMessage UserId
         * @property {number|null} [Status] AuthStatusMessage Status
         */

        /**
         * Constructs a new AuthStatusMessage.
         * @memberof message
         * @classdesc Represents an AuthStatusMessage.
         * @implements IAuthStatusMessage
         * @constructor
         * @param {message.IAuthStatusMessage=} [properties] Properties to set
         */
        function AuthStatusMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthStatusMessage UserId.
         * @member {string} UserId
         * @memberof message.AuthStatusMessage
         * @instance
         */
        AuthStatusMessage.prototype.UserId = "";

        /**
         * AuthStatusMessage Status.
         * @member {number} Status
         * @memberof message.AuthStatusMessage
         * @instance
         */
        AuthStatusMessage.prototype.Status = 0;

        /**
         * Creates a new AuthStatusMessage instance using the specified properties.
         * @function create
         * @memberof message.AuthStatusMessage
         * @static
         * @param {message.IAuthStatusMessage=} [properties] Properties to set
         * @returns {message.AuthStatusMessage} AuthStatusMessage instance
         */
        AuthStatusMessage.create = function create(properties) {
            return new AuthStatusMessage(properties);
        };

        /**
         * Encodes the specified AuthStatusMessage message. Does not implicitly {@link message.AuthStatusMessage.verify|verify} messages.
         * @function encode
         * @memberof message.AuthStatusMessage
         * @static
         * @param {message.IAuthStatusMessage} message AuthStatusMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthStatusMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserId);
            if (message.Status != null && Object.hasOwnProperty.call(message, "Status"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified AuthStatusMessage message, length delimited. Does not implicitly {@link message.AuthStatusMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.AuthStatusMessage
         * @static
         * @param {message.IAuthStatusMessage} message AuthStatusMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthStatusMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthStatusMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.AuthStatusMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.AuthStatusMessage} AuthStatusMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthStatusMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.AuthStatusMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.UserId = reader.string();
                        break;
                    }
                case 2: {
                        message.Status = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthStatusMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.AuthStatusMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.AuthStatusMessage} AuthStatusMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthStatusMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthStatusMessage message.
         * @function verify
         * @memberof message.AuthStatusMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthStatusMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isString(message.UserId))
                    return "UserId: string expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            return null;
        };

        /**
         * Creates an AuthStatusMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.AuthStatusMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.AuthStatusMessage} AuthStatusMessage
         */
        AuthStatusMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.AuthStatusMessage)
                return object;
            var message = new $root.message.AuthStatusMessage();
            if (object.UserId != null)
                message.UserId = String(object.UserId);
            if (object.Status != null)
                message.Status = object.Status >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AuthStatusMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.AuthStatusMessage
         * @static
         * @param {message.AuthStatusMessage} message AuthStatusMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthStatusMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserId = "";
                object.Status = 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                object.UserId = message.UserId;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this AuthStatusMessage to JSON.
         * @function toJSON
         * @memberof message.AuthStatusMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthStatusMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthStatusMessage
         * @function getTypeUrl
         * @memberof message.AuthStatusMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthStatusMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.AuthStatusMessage";
        };

        return AuthStatusMessage;
    })();

    message.AckMessage = (function() {

        /**
         * Properties of an AckMessage.
         * @memberof message
         * @interface IAckMessage
         * @property {number|Long|null} [Seq] AckMessage Seq
         */

        /**
         * Constructs a new AckMessage.
         * @memberof message
         * @classdesc Represents an AckMessage.
         * @implements IAckMessage
         * @constructor
         * @param {message.IAckMessage=} [properties] Properties to set
         */
        function AckMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AckMessage Seq.
         * @member {number|Long} Seq
         * @memberof message.AckMessage
         * @instance
         */
        AckMessage.prototype.Seq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new AckMessage instance using the specified properties.
         * @function create
         * @memberof message.AckMessage
         * @static
         * @param {message.IAckMessage=} [properties] Properties to set
         * @returns {message.AckMessage} AckMessage instance
         */
        AckMessage.create = function create(properties) {
            return new AckMessage(properties);
        };

        /**
         * Encodes the specified AckMessage message. Does not implicitly {@link message.AckMessage.verify|verify} messages.
         * @function encode
         * @memberof message.AckMessage
         * @static
         * @param {message.IAckMessage} message AckMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Seq != null && Object.hasOwnProperty.call(message, "Seq"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Seq);
            return writer;
        };

        /**
         * Encodes the specified AckMessage message, length delimited. Does not implicitly {@link message.AckMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.AckMessage
         * @static
         * @param {message.IAckMessage} message AckMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AckMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AckMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.AckMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.AckMessage} AckMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.AckMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Seq = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AckMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.AckMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.AckMessage} AckMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AckMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AckMessage message.
         * @function verify
         * @memberof message.AckMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AckMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Seq != null && message.hasOwnProperty("Seq"))
                if (!$util.isInteger(message.Seq) && !(message.Seq && $util.isInteger(message.Seq.low) && $util.isInteger(message.Seq.high)))
                    return "Seq: integer|Long expected";
            return null;
        };

        /**
         * Creates an AckMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.AckMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.AckMessage} AckMessage
         */
        AckMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.AckMessage)
                return object;
            var message = new $root.message.AckMessage();
            if (object.Seq != null)
                if ($util.Long)
                    (message.Seq = $util.Long.fromValue(object.Seq)).unsigned = true;
                else if (typeof object.Seq === "string")
                    message.Seq = parseInt(object.Seq, 10);
                else if (typeof object.Seq === "number")
                    message.Seq = object.Seq;
                else if (typeof object.Seq === "object")
                    message.Seq = new $util.LongBits(object.Seq.low >>> 0, object.Seq.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an AckMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.AckMessage
         * @static
         * @param {message.AckMessage} message AckMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AckMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Seq = options.longs === String ? "0" : 0;
            if (message.Seq != null && message.hasOwnProperty("Seq"))
                if (typeof message.Seq === "number")
                    object.Seq = options.longs === String ? String(message.Seq) : message.Seq;
                else
                    object.Seq = options.longs === String ? $util.Long.prototype.toString.call(message.Seq) : options.longs === Number ? new $util.LongBits(message.Seq.low >>> 0, message.Seq.high >>> 0).toNumber(true) : message.Seq;
            return object;
        };

        /**
         * Converts this AckMessage to JSON.
         * @function toJSON
         * @memberof message.AckMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AckMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AckMessage
         * @function getTypeUrl
         * @memberof message.AckMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AckMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.AckMessage";
        };

        return AckMessage;
    })();

    message.SyncKeyMessage = (function() {

        /**
         * Properties of a SyncKeyMessage.
         * @memberof message
         * @interface ISyncKeyMessage
         * @property {number|Long|null} [SyncKey] SyncKeyMessage SyncKey
         */

        /**
         * Constructs a new SyncKeyMessage.
         * @memberof message
         * @classdesc Represents a SyncKeyMessage.
         * @implements ISyncKeyMessage
         * @constructor
         * @param {message.ISyncKeyMessage=} [properties] Properties to set
         */
        function SyncKeyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncKeyMessage SyncKey.
         * @member {number|Long} SyncKey
         * @memberof message.SyncKeyMessage
         * @instance
         */
        SyncKeyMessage.prototype.SyncKey = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new SyncKeyMessage instance using the specified properties.
         * @function create
         * @memberof message.SyncKeyMessage
         * @static
         * @param {message.ISyncKeyMessage=} [properties] Properties to set
         * @returns {message.SyncKeyMessage} SyncKeyMessage instance
         */
        SyncKeyMessage.create = function create(properties) {
            return new SyncKeyMessage(properties);
        };

        /**
         * Encodes the specified SyncKeyMessage message. Does not implicitly {@link message.SyncKeyMessage.verify|verify} messages.
         * @function encode
         * @memberof message.SyncKeyMessage
         * @static
         * @param {message.ISyncKeyMessage} message SyncKeyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncKeyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SyncKey != null && Object.hasOwnProperty.call(message, "SyncKey"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.SyncKey);
            return writer;
        };

        /**
         * Encodes the specified SyncKeyMessage message, length delimited. Does not implicitly {@link message.SyncKeyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.SyncKeyMessage
         * @static
         * @param {message.ISyncKeyMessage} message SyncKeyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncKeyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncKeyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.SyncKeyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.SyncKeyMessage} SyncKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncKeyMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.SyncKeyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.SyncKey = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncKeyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.SyncKeyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.SyncKeyMessage} SyncKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncKeyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncKeyMessage message.
         * @function verify
         * @memberof message.SyncKeyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncKeyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SyncKey != null && message.hasOwnProperty("SyncKey"))
                if (!$util.isInteger(message.SyncKey) && !(message.SyncKey && $util.isInteger(message.SyncKey.low) && $util.isInteger(message.SyncKey.high)))
                    return "SyncKey: integer|Long expected";
            return null;
        };

        /**
         * Creates a SyncKeyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.SyncKeyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.SyncKeyMessage} SyncKeyMessage
         */
        SyncKeyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.SyncKeyMessage)
                return object;
            var message = new $root.message.SyncKeyMessage();
            if (object.SyncKey != null)
                if ($util.Long)
                    (message.SyncKey = $util.Long.fromValue(object.SyncKey)).unsigned = true;
                else if (typeof object.SyncKey === "string")
                    message.SyncKey = parseInt(object.SyncKey, 10);
                else if (typeof object.SyncKey === "number")
                    message.SyncKey = object.SyncKey;
                else if (typeof object.SyncKey === "object")
                    message.SyncKey = new $util.LongBits(object.SyncKey.low >>> 0, object.SyncKey.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a SyncKeyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.SyncKeyMessage
         * @static
         * @param {message.SyncKeyMessage} message SyncKeyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncKeyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.SyncKey = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SyncKey = options.longs === String ? "0" : 0;
            if (message.SyncKey != null && message.hasOwnProperty("SyncKey"))
                if (typeof message.SyncKey === "number")
                    object.SyncKey = options.longs === String ? String(message.SyncKey) : message.SyncKey;
                else
                    object.SyncKey = options.longs === String ? $util.Long.prototype.toString.call(message.SyncKey) : options.longs === Number ? new $util.LongBits(message.SyncKey.low >>> 0, message.SyncKey.high >>> 0).toNumber(true) : message.SyncKey;
            return object;
        };

        /**
         * Converts this SyncKeyMessage to JSON.
         * @function toJSON
         * @memberof message.SyncKeyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncKeyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncKeyMessage
         * @function getTypeUrl
         * @memberof message.SyncKeyMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncKeyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.SyncKeyMessage";
        };

        return SyncKeyMessage;
    })();

    message.SystemMessage = (function() {

        /**
         * Properties of a SystemMessage.
         * @memberof message
         * @interface ISystemMessage
         * @property {string|null} [Sender] SystemMessage Sender
         * @property {string|null} [Receiver] SystemMessage Receiver
         * @property {number|Long|null} [SystemMsgId] SystemMessage SystemMsgId
         * @property {number|Long|null} [MsgId] SystemMessage MsgId
         * @property {number|Long|null} [Timestamp] SystemMessage Timestamp
         * @property {string|null} [Content] SystemMessage Content
         */

        /**
         * Constructs a new SystemMessage.
         * @memberof message
         * @classdesc Represents a SystemMessage.
         * @implements ISystemMessage
         * @constructor
         * @param {message.ISystemMessage=} [properties] Properties to set
         */
        function SystemMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SystemMessage Sender.
         * @member {string} Sender
         * @memberof message.SystemMessage
         * @instance
         */
        SystemMessage.prototype.Sender = "";

        /**
         * SystemMessage Receiver.
         * @member {string} Receiver
         * @memberof message.SystemMessage
         * @instance
         */
        SystemMessage.prototype.Receiver = "";

        /**
         * SystemMessage SystemMsgId.
         * @member {number|Long} SystemMsgId
         * @memberof message.SystemMessage
         * @instance
         */
        SystemMessage.prototype.SystemMsgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SystemMessage MsgId.
         * @member {number|Long} MsgId
         * @memberof message.SystemMessage
         * @instance
         */
        SystemMessage.prototype.MsgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SystemMessage Timestamp.
         * @member {number|Long} Timestamp
         * @memberof message.SystemMessage
         * @instance
         */
        SystemMessage.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SystemMessage Content.
         * @member {string} Content
         * @memberof message.SystemMessage
         * @instance
         */
        SystemMessage.prototype.Content = "";

        /**
         * Creates a new SystemMessage instance using the specified properties.
         * @function create
         * @memberof message.SystemMessage
         * @static
         * @param {message.ISystemMessage=} [properties] Properties to set
         * @returns {message.SystemMessage} SystemMessage instance
         */
        SystemMessage.create = function create(properties) {
            return new SystemMessage(properties);
        };

        /**
         * Encodes the specified SystemMessage message. Does not implicitly {@link message.SystemMessage.verify|verify} messages.
         * @function encode
         * @memberof message.SystemMessage
         * @static
         * @param {message.ISystemMessage} message SystemMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver);
            if (message.SystemMsgId != null && Object.hasOwnProperty.call(message, "SystemMsgId"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.SystemMsgId);
            if (message.MsgId != null && Object.hasOwnProperty.call(message, "MsgId"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.MsgId);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.Timestamp);
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified SystemMessage message, length delimited. Does not implicitly {@link message.SystemMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.SystemMessage
         * @static
         * @param {message.ISystemMessage} message SystemMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SystemMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.SystemMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.SystemMessage} SystemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.SystemMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 7: {
                        message.SystemMsgId = reader.uint64();
                        break;
                    }
                case 8: {
                        message.MsgId = reader.uint64();
                        break;
                    }
                case 9: {
                        message.Timestamp = reader.uint64();
                        break;
                    }
                case 10: {
                        message.Content = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SystemMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.SystemMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.SystemMessage} SystemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SystemMessage message.
         * @function verify
         * @memberof message.SystemMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SystemMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.SystemMsgId != null && message.hasOwnProperty("SystemMsgId"))
                if (!$util.isInteger(message.SystemMsgId) && !(message.SystemMsgId && $util.isInteger(message.SystemMsgId.low) && $util.isInteger(message.SystemMsgId.high)))
                    return "SystemMsgId: integer|Long expected";
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (!$util.isInteger(message.MsgId) && !(message.MsgId && $util.isInteger(message.MsgId.low) && $util.isInteger(message.MsgId.high)))
                    return "MsgId: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a SystemMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.SystemMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.SystemMessage} SystemMessage
         */
        SystemMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.SystemMessage)
                return object;
            var message = new $root.message.SystemMessage();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.SystemMsgId != null)
                if ($util.Long)
                    (message.SystemMsgId = $util.Long.fromValue(object.SystemMsgId)).unsigned = true;
                else if (typeof object.SystemMsgId === "string")
                    message.SystemMsgId = parseInt(object.SystemMsgId, 10);
                else if (typeof object.SystemMsgId === "number")
                    message.SystemMsgId = object.SystemMsgId;
                else if (typeof object.SystemMsgId === "object")
                    message.SystemMsgId = new $util.LongBits(object.SystemMsgId.low >>> 0, object.SystemMsgId.high >>> 0).toNumber(true);
            if (object.MsgId != null)
                if ($util.Long)
                    (message.MsgId = $util.Long.fromValue(object.MsgId)).unsigned = true;
                else if (typeof object.MsgId === "string")
                    message.MsgId = parseInt(object.MsgId, 10);
                else if (typeof object.MsgId === "number")
                    message.MsgId = object.MsgId;
                else if (typeof object.MsgId === "object")
                    message.MsgId = new $util.LongBits(object.MsgId.low >>> 0, object.MsgId.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a SystemMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.SystemMessage
         * @static
         * @param {message.SystemMessage} message SystemMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SystemMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Sender = "";
                object.Receiver = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.SystemMsgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SystemMsgId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MsgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MsgId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.Content = "";
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.SystemMsgId != null && message.hasOwnProperty("SystemMsgId"))
                if (typeof message.SystemMsgId === "number")
                    object.SystemMsgId = options.longs === String ? String(message.SystemMsgId) : message.SystemMsgId;
                else
                    object.SystemMsgId = options.longs === String ? $util.Long.prototype.toString.call(message.SystemMsgId) : options.longs === Number ? new $util.LongBits(message.SystemMsgId.low >>> 0, message.SystemMsgId.high >>> 0).toNumber(true) : message.SystemMsgId;
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (typeof message.MsgId === "number")
                    object.MsgId = options.longs === String ? String(message.MsgId) : message.MsgId;
                else
                    object.MsgId = options.longs === String ? $util.Long.prototype.toString.call(message.MsgId) : options.longs === Number ? new $util.LongBits(message.MsgId.low >>> 0, message.MsgId.high >>> 0).toNumber(true) : message.MsgId;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this SystemMessage to JSON.
         * @function toJSON
         * @memberof message.SystemMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SystemMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SystemMessage
         * @function getTypeUrl
         * @memberof message.SystemMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SystemMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.SystemMessage";
        };

        return SystemMessage;
    })();

    message.AppMessage = (function() {

        /**
         * Properties of an AppMessage.
         * @memberof message
         * @interface IAppMessage
         * @property {string|null} [Sender] AppMessage Sender
         * @property {string|null} [Receiver] AppMessage Receiver
         * @property {number|null} [PlatformId] AppMessage PlatformId
         * @property {string|null} [Addr] AppMessage Addr
         * @property {message.IMessage|null} [Message] AppMessage Message
         */

        /**
         * Constructs a new AppMessage.
         * @memberof message
         * @classdesc Represents an AppMessage.
         * @implements IAppMessage
         * @constructor
         * @param {message.IAppMessage=} [properties] Properties to set
         */
        function AppMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppMessage Sender.
         * @member {string} Sender
         * @memberof message.AppMessage
         * @instance
         */
        AppMessage.prototype.Sender = "";

        /**
         * AppMessage Receiver.
         * @member {string} Receiver
         * @memberof message.AppMessage
         * @instance
         */
        AppMessage.prototype.Receiver = "";

        /**
         * AppMessage PlatformId.
         * @member {number} PlatformId
         * @memberof message.AppMessage
         * @instance
         */
        AppMessage.prototype.PlatformId = 0;

        /**
         * AppMessage Addr.
         * @member {string} Addr
         * @memberof message.AppMessage
         * @instance
         */
        AppMessage.prototype.Addr = "";

        /**
         * AppMessage Message.
         * @member {message.IMessage|null|undefined} Message
         * @memberof message.AppMessage
         * @instance
         */
        AppMessage.prototype.Message = null;

        /**
         * Creates a new AppMessage instance using the specified properties.
         * @function create
         * @memberof message.AppMessage
         * @static
         * @param {message.IAppMessage=} [properties] Properties to set
         * @returns {message.AppMessage} AppMessage instance
         */
        AppMessage.create = function create(properties) {
            return new AppMessage(properties);
        };

        /**
         * Encodes the specified AppMessage message. Does not implicitly {@link message.AppMessage.verify|verify} messages.
         * @function encode
         * @memberof message.AppMessage
         * @static
         * @param {message.IAppMessage} message AppMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver);
            if (message.PlatformId != null && Object.hasOwnProperty.call(message, "PlatformId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.PlatformId);
            if (message.Addr != null && Object.hasOwnProperty.call(message, "Addr"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Addr);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                $root.message.Message.encode(message.Message, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AppMessage message, length delimited. Does not implicitly {@link message.AppMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.AppMessage
         * @static
         * @param {message.IAppMessage} message AppMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.AppMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.AppMessage} AppMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.AppMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 3: {
                        message.PlatformId = reader.uint32();
                        break;
                    }
                case 4: {
                        message.Addr = reader.string();
                        break;
                    }
                case 5: {
                        message.Message = $root.message.Message.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AppMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.AppMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.AppMessage} AppMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppMessage message.
         * @function verify
         * @memberof message.AppMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                if (!$util.isInteger(message.PlatformId))
                    return "PlatformId: integer expected";
            if (message.Addr != null && message.hasOwnProperty("Addr"))
                if (!$util.isString(message.Addr))
                    return "Addr: string expected";
            if (message.Message != null && message.hasOwnProperty("Message")) {
                var error = $root.message.Message.verify(message.Message);
                if (error)
                    return "Message." + error;
            }
            return null;
        };

        /**
         * Creates an AppMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.AppMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.AppMessage} AppMessage
         */
        AppMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.AppMessage)
                return object;
            var message = new $root.message.AppMessage();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.PlatformId != null)
                message.PlatformId = object.PlatformId >>> 0;
            if (object.Addr != null)
                message.Addr = String(object.Addr);
            if (object.Message != null) {
                if (typeof object.Message !== "object")
                    throw TypeError(".message.AppMessage.Message: object expected");
                message.Message = $root.message.Message.fromObject(object.Message);
            }
            return message;
        };

        /**
         * Creates a plain object from an AppMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.AppMessage
         * @static
         * @param {message.AppMessage} message AppMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Sender = "";
                object.Receiver = "";
                object.PlatformId = 0;
                object.Addr = "";
                object.Message = null;
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                object.PlatformId = message.PlatformId;
            if (message.Addr != null && message.hasOwnProperty("Addr"))
                object.Addr = message.Addr;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = $root.message.Message.toObject(message.Message, options);
            return object;
        };

        /**
         * Converts this AppMessage to JSON.
         * @function toJSON
         * @memberof message.AppMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppMessage
         * @function getTypeUrl
         * @memberof message.AppMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.AppMessage";
        };

        return AppMessage;
    })();

    message.ResultMessage = (function() {

        /**
         * Properties of a ResultMessage.
         * @memberof message
         * @interface IResultMessage
         * @property {number|null} [Code] ResultMessage Code
         * @property {string|null} [Msg] ResultMessage Msg
         */

        /**
         * Constructs a new ResultMessage.
         * @memberof message
         * @classdesc Represents a ResultMessage.
         * @implements IResultMessage
         * @constructor
         * @param {message.IResultMessage=} [properties] Properties to set
         */
        function ResultMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResultMessage Code.
         * @member {number} Code
         * @memberof message.ResultMessage
         * @instance
         */
        ResultMessage.prototype.Code = 0;

        /**
         * ResultMessage Msg.
         * @member {string} Msg
         * @memberof message.ResultMessage
         * @instance
         */
        ResultMessage.prototype.Msg = "";

        /**
         * Creates a new ResultMessage instance using the specified properties.
         * @function create
         * @memberof message.ResultMessage
         * @static
         * @param {message.IResultMessage=} [properties] Properties to set
         * @returns {message.ResultMessage} ResultMessage instance
         */
        ResultMessage.create = function create(properties) {
            return new ResultMessage(properties);
        };

        /**
         * Encodes the specified ResultMessage message. Does not implicitly {@link message.ResultMessage.verify|verify} messages.
         * @function encode
         * @memberof message.ResultMessage
         * @static
         * @param {message.IResultMessage} message ResultMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Code);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified ResultMessage message, length delimited. Does not implicitly {@link message.ResultMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.ResultMessage
         * @static
         * @param {message.IResultMessage} message ResultMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResultMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.ResultMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.ResultMessage} ResultMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ResultMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.Msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResultMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.ResultMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.ResultMessage} ResultMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResultMessage message.
         * @function verify
         * @memberof message.ResultMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResultMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            return null;
        };

        /**
         * Creates a ResultMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.ResultMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.ResultMessage} ResultMessage
         */
        ResultMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.ResultMessage)
                return object;
            var message = new $root.message.ResultMessage();
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a ResultMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.ResultMessage
         * @static
         * @param {message.ResultMessage} message ResultMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResultMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this ResultMessage to JSON.
         * @function toJSON
         * @memberof message.ResultMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResultMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResultMessage
         * @function getTypeUrl
         * @memberof message.ResultMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResultMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.ResultMessage";
        };

        return ResultMessage;
    })();

    message.TransMessage = (function() {

        /**
         * Properties of a TransMessage.
         * @memberof message
         * @interface ITransMessage
         * @property {number|null} [Type] TransMessage Type
         * @property {string|null} [Sender] TransMessage Sender
         * @property {string|null} [Receiver] TransMessage Receiver
         * @property {number|Long|null} [Timestamp] TransMessage Timestamp
         * @property {string|null} [Content] TransMessage Content
         */

        /**
         * Constructs a new TransMessage.
         * @memberof message
         * @classdesc Represents a TransMessage.
         * @implements ITransMessage
         * @constructor
         * @param {message.ITransMessage=} [properties] Properties to set
         */
        function TransMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransMessage Type.
         * @member {number} Type
         * @memberof message.TransMessage
         * @instance
         */
        TransMessage.prototype.Type = 0;

        /**
         * TransMessage Sender.
         * @member {string} Sender
         * @memberof message.TransMessage
         * @instance
         */
        TransMessage.prototype.Sender = "";

        /**
         * TransMessage Receiver.
         * @member {string} Receiver
         * @memberof message.TransMessage
         * @instance
         */
        TransMessage.prototype.Receiver = "";

        /**
         * TransMessage Timestamp.
         * @member {number|Long} Timestamp
         * @memberof message.TransMessage
         * @instance
         */
        TransMessage.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TransMessage Content.
         * @member {string} Content
         * @memberof message.TransMessage
         * @instance
         */
        TransMessage.prototype.Content = "";

        /**
         * Creates a new TransMessage instance using the specified properties.
         * @function create
         * @memberof message.TransMessage
         * @static
         * @param {message.ITransMessage=} [properties] Properties to set
         * @returns {message.TransMessage} TransMessage instance
         */
        TransMessage.create = function create(properties) {
            return new TransMessage(properties);
        };

        /**
         * Encodes the specified TransMessage message. Does not implicitly {@link message.TransMessage.verify|verify} messages.
         * @function encode
         * @memberof message.TransMessage
         * @static
         * @param {message.ITransMessage} message TransMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Type);
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Receiver);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Timestamp);
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified TransMessage message, length delimited. Does not implicitly {@link message.TransMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.TransMessage
         * @static
         * @param {message.ITransMessage} message TransMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TransMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.TransMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.TransMessage} TransMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.TransMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Type = reader.uint32();
                        break;
                    }
                case 2: {
                        message.Sender = reader.string();
                        break;
                    }
                case 3: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 4: {
                        message.Timestamp = reader.uint64();
                        break;
                    }
                case 5: {
                        message.Content = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TransMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.TransMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.TransMessage} TransMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TransMessage message.
         * @function verify
         * @memberof message.TransMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TransMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a TransMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.TransMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.TransMessage} TransMessage
         */
        TransMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.TransMessage)
                return object;
            var message = new $root.message.TransMessage();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a TransMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.TransMessage
         * @static
         * @param {message.TransMessage} message TransMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TransMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                object.Sender = "";
                object.Receiver = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.Content = "";
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this TransMessage to JSON.
         * @function toJSON
         * @memberof message.TransMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TransMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TransMessage
         * @function getTypeUrl
         * @memberof message.TransMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TransMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.TransMessage";
        };

        return TransMessage;
    })();

    message.StateMessage = (function() {

        /**
         * Properties of a StateMessage.
         * @memberof message
         * @interface IStateMessage
         * @property {string|null} [RoomId] StateMessage RoomId
         * @property {string|null} [State] StateMessage State
         */

        /**
         * Constructs a new StateMessage.
         * @memberof message
         * @classdesc Represents a StateMessage.
         * @implements IStateMessage
         * @constructor
         * @param {message.IStateMessage=} [properties] Properties to set
         */
        function StateMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StateMessage RoomId.
         * @member {string} RoomId
         * @memberof message.StateMessage
         * @instance
         */
        StateMessage.prototype.RoomId = "";

        /**
         * StateMessage State.
         * @member {string} State
         * @memberof message.StateMessage
         * @instance
         */
        StateMessage.prototype.State = "";

        /**
         * Creates a new StateMessage instance using the specified properties.
         * @function create
         * @memberof message.StateMessage
         * @static
         * @param {message.IStateMessage=} [properties] Properties to set
         * @returns {message.StateMessage} StateMessage instance
         */
        StateMessage.create = function create(properties) {
            return new StateMessage(properties);
        };

        /**
         * Encodes the specified StateMessage message. Does not implicitly {@link message.StateMessage.verify|verify} messages.
         * @function encode
         * @memberof message.StateMessage
         * @static
         * @param {message.IStateMessage} message StateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoomId);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.State);
            return writer;
        };

        /**
         * Encodes the specified StateMessage message, length delimited. Does not implicitly {@link message.StateMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.StateMessage
         * @static
         * @param {message.IStateMessage} message StateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StateMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StateMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.StateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.StateMessage} StateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.StateMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.RoomId = reader.string();
                        break;
                    }
                case 2: {
                        message.State = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StateMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.StateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.StateMessage} StateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StateMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StateMessage message.
         * @function verify
         * @memberof message.StateMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StateMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isString(message.RoomId))
                    return "RoomId: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isString(message.State))
                    return "State: string expected";
            return null;
        };

        /**
         * Creates a StateMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.StateMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.StateMessage} StateMessage
         */
        StateMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.StateMessage)
                return object;
            var message = new $root.message.StateMessage();
            if (object.RoomId != null)
                message.RoomId = String(object.RoomId);
            if (object.State != null)
                message.State = String(object.State);
            return message;
        };

        /**
         * Creates a plain object from a StateMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.StateMessage
         * @static
         * @param {message.StateMessage} message StateMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StateMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RoomId = "";
                object.State = "";
            }
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                object.RoomId = message.RoomId;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            return object;
        };

        /**
         * Converts this StateMessage to JSON.
         * @function toJSON
         * @memberof message.StateMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StateMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StateMessage
         * @function getTypeUrl
         * @memberof message.StateMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StateMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.StateMessage";
        };

        return StateMessage;
    })();

    message.ModifyMessage = (function() {

        /**
         * Properties of a ModifyMessage.
         * @memberof message
         * @interface IModifyMessage
         * @property {string|null} [Type] ModifyMessage Type
         * @property {string|null} [Sender] ModifyMessage Sender
         * @property {string|null} [Receiver] ModifyMessage Receiver
         * @property {string|null} [Key] ModifyMessage Key
         * @property {string|null} [Value] ModifyMessage Value
         */

        /**
         * Constructs a new ModifyMessage.
         * @memberof message
         * @classdesc Represents a ModifyMessage.
         * @implements IModifyMessage
         * @constructor
         * @param {message.IModifyMessage=} [properties] Properties to set
         */
        function ModifyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyMessage Type.
         * @member {string} Type
         * @memberof message.ModifyMessage
         * @instance
         */
        ModifyMessage.prototype.Type = "";

        /**
         * ModifyMessage Sender.
         * @member {string} Sender
         * @memberof message.ModifyMessage
         * @instance
         */
        ModifyMessage.prototype.Sender = "";

        /**
         * ModifyMessage Receiver.
         * @member {string} Receiver
         * @memberof message.ModifyMessage
         * @instance
         */
        ModifyMessage.prototype.Receiver = "";

        /**
         * ModifyMessage Key.
         * @member {string} Key
         * @memberof message.ModifyMessage
         * @instance
         */
        ModifyMessage.prototype.Key = "";

        /**
         * ModifyMessage Value.
         * @member {string} Value
         * @memberof message.ModifyMessage
         * @instance
         */
        ModifyMessage.prototype.Value = "";

        /**
         * Creates a new ModifyMessage instance using the specified properties.
         * @function create
         * @memberof message.ModifyMessage
         * @static
         * @param {message.IModifyMessage=} [properties] Properties to set
         * @returns {message.ModifyMessage} ModifyMessage instance
         */
        ModifyMessage.create = function create(properties) {
            return new ModifyMessage(properties);
        };

        /**
         * Encodes the specified ModifyMessage message. Does not implicitly {@link message.ModifyMessage.verify|verify} messages.
         * @function encode
         * @memberof message.ModifyMessage
         * @static
         * @param {message.IModifyMessage} message ModifyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Type);
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Receiver);
            if (message.Key != null && Object.hasOwnProperty.call(message, "Key"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Key);
            if (message.Value != null && Object.hasOwnProperty.call(message, "Value"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Value);
            return writer;
        };

        /**
         * Encodes the specified ModifyMessage message, length delimited. Does not implicitly {@link message.ModifyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.ModifyMessage
         * @static
         * @param {message.IModifyMessage} message ModifyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.ModifyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.ModifyMessage} ModifyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ModifyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Type = reader.string();
                        break;
                    }
                case 2: {
                        message.Sender = reader.string();
                        break;
                    }
                case 3: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 4: {
                        message.Key = reader.string();
                        break;
                    }
                case 5: {
                        message.Value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ModifyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.ModifyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.ModifyMessage} ModifyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyMessage message.
         * @function verify
         * @memberof message.ModifyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (!$util.isString(message.Key))
                    return "Key: string expected";
            if (message.Value != null && message.hasOwnProperty("Value"))
                if (!$util.isString(message.Value))
                    return "Value: string expected";
            return null;
        };

        /**
         * Creates a ModifyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.ModifyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.ModifyMessage} ModifyMessage
         */
        ModifyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.ModifyMessage)
                return object;
            var message = new $root.message.ModifyMessage();
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.Key != null)
                message.Key = String(object.Key);
            if (object.Value != null)
                message.Value = String(object.Value);
            return message;
        };

        /**
         * Creates a plain object from a ModifyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.ModifyMessage
         * @static
         * @param {message.ModifyMessage} message ModifyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = "";
                object.Sender = "";
                object.Receiver = "";
                object.Key = "";
                object.Value = "";
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.Key != null && message.hasOwnProperty("Key"))
                object.Key = message.Key;
            if (message.Value != null && message.hasOwnProperty("Value"))
                object.Value = message.Value;
            return object;
        };

        /**
         * Converts this ModifyMessage to JSON.
         * @function toJSON
         * @memberof message.ModifyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ModifyMessage
         * @function getTypeUrl
         * @memberof message.ModifyMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ModifyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.ModifyMessage";
        };

        return ModifyMessage;
    })();

    message.ModifyType = (function() {

        /**
         * Properties of a ModifyType.
         * @memberof message
         * @interface IModifyType
         * @property {string|null} [Type] ModifyType Type
         * @property {string|null} [Key] ModifyType Key
         * @property {string|null} [Value] ModifyType Value
         */

        /**
         * Constructs a new ModifyType.
         * @memberof message
         * @classdesc Represents a ModifyType.
         * @implements IModifyType
         * @constructor
         * @param {message.IModifyType=} [properties] Properties to set
         */
        function ModifyType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyType Type.
         * @member {string} Type
         * @memberof message.ModifyType
         * @instance
         */
        ModifyType.prototype.Type = "";

        /**
         * ModifyType Key.
         * @member {string} Key
         * @memberof message.ModifyType
         * @instance
         */
        ModifyType.prototype.Key = "";

        /**
         * ModifyType Value.
         * @member {string} Value
         * @memberof message.ModifyType
         * @instance
         */
        ModifyType.prototype.Value = "";

        /**
         * Creates a new ModifyType instance using the specified properties.
         * @function create
         * @memberof message.ModifyType
         * @static
         * @param {message.IModifyType=} [properties] Properties to set
         * @returns {message.ModifyType} ModifyType instance
         */
        ModifyType.create = function create(properties) {
            return new ModifyType(properties);
        };

        /**
         * Encodes the specified ModifyType message. Does not implicitly {@link message.ModifyType.verify|verify} messages.
         * @function encode
         * @memberof message.ModifyType
         * @static
         * @param {message.IModifyType} message ModifyType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Type);
            if (message.Key != null && Object.hasOwnProperty.call(message, "Key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Key);
            if (message.Value != null && Object.hasOwnProperty.call(message, "Value"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Value);
            return writer;
        };

        /**
         * Encodes the specified ModifyType message, length delimited. Does not implicitly {@link message.ModifyType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.ModifyType
         * @static
         * @param {message.IModifyType} message ModifyType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyType message from the specified reader or buffer.
         * @function decode
         * @memberof message.ModifyType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.ModifyType} ModifyType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.ModifyType();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Type = reader.string();
                        break;
                    }
                case 2: {
                        message.Key = reader.string();
                        break;
                    }
                case 3: {
                        message.Value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ModifyType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.ModifyType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.ModifyType} ModifyType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyType message.
         * @function verify
         * @memberof message.ModifyType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (!$util.isString(message.Key))
                    return "Key: string expected";
            if (message.Value != null && message.hasOwnProperty("Value"))
                if (!$util.isString(message.Value))
                    return "Value: string expected";
            return null;
        };

        /**
         * Creates a ModifyType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.ModifyType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.ModifyType} ModifyType
         */
        ModifyType.fromObject = function fromObject(object) {
            if (object instanceof $root.message.ModifyType)
                return object;
            var message = new $root.message.ModifyType();
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.Key != null)
                message.Key = String(object.Key);
            if (object.Value != null)
                message.Value = String(object.Value);
            return message;
        };

        /**
         * Creates a plain object from a ModifyType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.ModifyType
         * @static
         * @param {message.ModifyType} message ModifyType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = "";
                object.Key = "";
                object.Value = "";
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Key != null && message.hasOwnProperty("Key"))
                object.Key = message.Key;
            if (message.Value != null && message.hasOwnProperty("Value"))
                object.Value = message.Value;
            return object;
        };

        /**
         * Converts this ModifyType to JSON.
         * @function toJSON
         * @memberof message.ModifyType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ModifyType
         * @function getTypeUrl
         * @memberof message.ModifyType
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ModifyType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.ModifyType";
        };

        return ModifyType;
    })();

    message.RoomModify = (function() {

        /**
         * Properties of a RoomModify.
         * @memberof message
         * @interface IRoomModify
         * @property {string|null} [RoomId] RoomModify RoomId
         * @property {message.IModifyType|null} [modify] RoomModify modify
         */

        /**
         * Constructs a new RoomModify.
         * @memberof message
         * @classdesc Represents a RoomModify.
         * @implements IRoomModify
         * @constructor
         * @param {message.IRoomModify=} [properties] Properties to set
         */
        function RoomModify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomModify RoomId.
         * @member {string} RoomId
         * @memberof message.RoomModify
         * @instance
         */
        RoomModify.prototype.RoomId = "";

        /**
         * RoomModify modify.
         * @member {message.IModifyType|null|undefined} modify
         * @memberof message.RoomModify
         * @instance
         */
        RoomModify.prototype.modify = null;

        /**
         * Creates a new RoomModify instance using the specified properties.
         * @function create
         * @memberof message.RoomModify
         * @static
         * @param {message.IRoomModify=} [properties] Properties to set
         * @returns {message.RoomModify} RoomModify instance
         */
        RoomModify.create = function create(properties) {
            return new RoomModify(properties);
        };

        /**
         * Encodes the specified RoomModify message. Does not implicitly {@link message.RoomModify.verify|verify} messages.
         * @function encode
         * @memberof message.RoomModify
         * @static
         * @param {message.IRoomModify} message RoomModify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomModify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.RoomId);
            if (message.modify != null && Object.hasOwnProperty.call(message, "modify"))
                $root.message.ModifyType.encode(message.modify, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomModify message, length delimited. Does not implicitly {@link message.RoomModify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.RoomModify
         * @static
         * @param {message.IRoomModify} message RoomModify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomModify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomModify message from the specified reader or buffer.
         * @function decode
         * @memberof message.RoomModify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.RoomModify} RoomModify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomModify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RoomModify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3: {
                        message.RoomId = reader.string();
                        break;
                    }
                case 4: {
                        message.modify = $root.message.ModifyType.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomModify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.RoomModify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.RoomModify} RoomModify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomModify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomModify message.
         * @function verify
         * @memberof message.RoomModify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomModify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isString(message.RoomId))
                    return "RoomId: string expected";
            if (message.modify != null && message.hasOwnProperty("modify")) {
                var error = $root.message.ModifyType.verify(message.modify);
                if (error)
                    return "modify." + error;
            }
            return null;
        };

        /**
         * Creates a RoomModify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RoomModify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.RoomModify} RoomModify
         */
        RoomModify.fromObject = function fromObject(object) {
            if (object instanceof $root.message.RoomModify)
                return object;
            var message = new $root.message.RoomModify();
            if (object.RoomId != null)
                message.RoomId = String(object.RoomId);
            if (object.modify != null) {
                if (typeof object.modify !== "object")
                    throw TypeError(".message.RoomModify.modify: object expected");
                message.modify = $root.message.ModifyType.fromObject(object.modify);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomModify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RoomModify
         * @static
         * @param {message.RoomModify} message RoomModify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomModify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RoomId = "";
                object.modify = null;
            }
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                object.RoomId = message.RoomId;
            if (message.modify != null && message.hasOwnProperty("modify"))
                object.modify = $root.message.ModifyType.toObject(message.modify, options);
            return object;
        };

        /**
         * Converts this RoomModify to JSON.
         * @function toJSON
         * @memberof message.RoomModify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomModify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomModify
         * @function getTypeUrl
         * @memberof message.RoomModify
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomModify.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.RoomModify";
        };

        return RoomModify;
    })();

    message.PushOrderMessage = (function() {

        /**
         * Properties of a PushOrderMessage.
         * @memberof message
         * @interface IPushOrderMessage
         * @property {string|null} [Sender] PushOrderMessage Sender
         * @property {string|null} [Receiver] PushOrderMessage Receiver
         * @property {number|null} [Status] PushOrderMessage Status
         * @property {number|Long|null} [Timestamp] PushOrderMessage Timestamp
         * @property {message.IMessage|null} [message] PushOrderMessage message
         */

        /**
         * Constructs a new PushOrderMessage.
         * @memberof message
         * @classdesc Represents a PushOrderMessage.
         * @implements IPushOrderMessage
         * @constructor
         * @param {message.IPushOrderMessage=} [properties] Properties to set
         */
        function PushOrderMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushOrderMessage Sender.
         * @member {string} Sender
         * @memberof message.PushOrderMessage
         * @instance
         */
        PushOrderMessage.prototype.Sender = "";

        /**
         * PushOrderMessage Receiver.
         * @member {string} Receiver
         * @memberof message.PushOrderMessage
         * @instance
         */
        PushOrderMessage.prototype.Receiver = "";

        /**
         * PushOrderMessage Status.
         * @member {number} Status
         * @memberof message.PushOrderMessage
         * @instance
         */
        PushOrderMessage.prototype.Status = 0;

        /**
         * PushOrderMessage Timestamp.
         * @member {number|Long} Timestamp
         * @memberof message.PushOrderMessage
         * @instance
         */
        PushOrderMessage.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PushOrderMessage message.
         * @member {message.IMessage|null|undefined} message
         * @memberof message.PushOrderMessage
         * @instance
         */
        PushOrderMessage.prototype.message = null;

        /**
         * Creates a new PushOrderMessage instance using the specified properties.
         * @function create
         * @memberof message.PushOrderMessage
         * @static
         * @param {message.IPushOrderMessage=} [properties] Properties to set
         * @returns {message.PushOrderMessage} PushOrderMessage instance
         */
        PushOrderMessage.create = function create(properties) {
            return new PushOrderMessage(properties);
        };

        /**
         * Encodes the specified PushOrderMessage message. Does not implicitly {@link message.PushOrderMessage.verify|verify} messages.
         * @function encode
         * @memberof message.PushOrderMessage
         * @static
         * @param {message.IPushOrderMessage} message PushOrderMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushOrderMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver);
            if (message.Status != null && Object.hasOwnProperty.call(message, "Status"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.Status);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Timestamp);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                $root.message.Message.encode(message.message, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PushOrderMessage message, length delimited. Does not implicitly {@link message.PushOrderMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.PushOrderMessage
         * @static
         * @param {message.IPushOrderMessage} message PushOrderMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushOrderMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushOrderMessage message from the specified reader or buffer.
         * @function decode
         * @memberof message.PushOrderMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.PushOrderMessage} PushOrderMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushOrderMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.PushOrderMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 3: {
                        message.Status = reader.uint32();
                        break;
                    }
                case 4: {
                        message.Timestamp = reader.uint64();
                        break;
                    }
                case 5: {
                        message.message = $root.message.Message.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushOrderMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.PushOrderMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.PushOrderMessage} PushOrderMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushOrderMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushOrderMessage message.
         * @function verify
         * @memberof message.PushOrderMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushOrderMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.message != null && message.hasOwnProperty("message")) {
                var error = $root.message.Message.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates a PushOrderMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.PushOrderMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.PushOrderMessage} PushOrderMessage
         */
        PushOrderMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.message.PushOrderMessage)
                return object;
            var message = new $root.message.PushOrderMessage();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.Status != null)
                message.Status = object.Status >>> 0;
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".message.PushOrderMessage.message: object expected");
                message.message = $root.message.Message.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from a PushOrderMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.PushOrderMessage
         * @static
         * @param {message.PushOrderMessage} message PushOrderMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushOrderMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Sender = "";
                object.Receiver = "";
                object.Status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.message = null;
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.message.Message.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this PushOrderMessage to JSON.
         * @function toJSON
         * @memberof message.PushOrderMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushOrderMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PushOrderMessage
         * @function getTypeUrl
         * @memberof message.PushOrderMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushOrderMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.PushOrderMessage";
        };

        return PushOrderMessage;
    })();

    message.RelayUserInfo = (function() {

        /**
         * Properties of a RelayUserInfo.
         * @memberof message
         * @interface IRelayUserInfo
         * @property {string|null} [Sender] RelayUserInfo Sender
         * @property {string|null} [Receiver] RelayUserInfo Receiver
         * @property {number|Long|null} [MsgId] RelayUserInfo MsgId
         * @property {string|null} [SenderName] RelayUserInfo SenderName
         * @property {string|null} [SenderAvatar] RelayUserInfo SenderAvatar
         * @property {string|null} [ReceiverName] RelayUserInfo ReceiverName
         * @property {string|null} [ReceiverAvatar] RelayUserInfo ReceiverAvatar
         */

        /**
         * Constructs a new RelayUserInfo.
         * @memberof message
         * @classdesc Represents a RelayUserInfo.
         * @implements IRelayUserInfo
         * @constructor
         * @param {message.IRelayUserInfo=} [properties] Properties to set
         */
        function RelayUserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RelayUserInfo Sender.
         * @member {string} Sender
         * @memberof message.RelayUserInfo
         * @instance
         */
        RelayUserInfo.prototype.Sender = "";

        /**
         * RelayUserInfo Receiver.
         * @member {string} Receiver
         * @memberof message.RelayUserInfo
         * @instance
         */
        RelayUserInfo.prototype.Receiver = "";

        /**
         * RelayUserInfo MsgId.
         * @member {number|Long} MsgId
         * @memberof message.RelayUserInfo
         * @instance
         */
        RelayUserInfo.prototype.MsgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RelayUserInfo SenderName.
         * @member {string} SenderName
         * @memberof message.RelayUserInfo
         * @instance
         */
        RelayUserInfo.prototype.SenderName = "";

        /**
         * RelayUserInfo SenderAvatar.
         * @member {string} SenderAvatar
         * @memberof message.RelayUserInfo
         * @instance
         */
        RelayUserInfo.prototype.SenderAvatar = "";

        /**
         * RelayUserInfo ReceiverName.
         * @member {string} ReceiverName
         * @memberof message.RelayUserInfo
         * @instance
         */
        RelayUserInfo.prototype.ReceiverName = "";

        /**
         * RelayUserInfo ReceiverAvatar.
         * @member {string} ReceiverAvatar
         * @memberof message.RelayUserInfo
         * @instance
         */
        RelayUserInfo.prototype.ReceiverAvatar = "";

        /**
         * Creates a new RelayUserInfo instance using the specified properties.
         * @function create
         * @memberof message.RelayUserInfo
         * @static
         * @param {message.IRelayUserInfo=} [properties] Properties to set
         * @returns {message.RelayUserInfo} RelayUserInfo instance
         */
        RelayUserInfo.create = function create(properties) {
            return new RelayUserInfo(properties);
        };

        /**
         * Encodes the specified RelayUserInfo message. Does not implicitly {@link message.RelayUserInfo.verify|verify} messages.
         * @function encode
         * @memberof message.RelayUserInfo
         * @static
         * @param {message.IRelayUserInfo} message RelayUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RelayUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.Receiver != null && Object.hasOwnProperty.call(message, "Receiver"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Receiver);
            if (message.MsgId != null && Object.hasOwnProperty.call(message, "MsgId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.MsgId);
            if (message.SenderName != null && Object.hasOwnProperty.call(message, "SenderName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.SenderName);
            if (message.SenderAvatar != null && Object.hasOwnProperty.call(message, "SenderAvatar"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.SenderAvatar);
            if (message.ReceiverName != null && Object.hasOwnProperty.call(message, "ReceiverName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ReceiverName);
            if (message.ReceiverAvatar != null && Object.hasOwnProperty.call(message, "ReceiverAvatar"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ReceiverAvatar);
            return writer;
        };

        /**
         * Encodes the specified RelayUserInfo message, length delimited. Does not implicitly {@link message.RelayUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.RelayUserInfo
         * @static
         * @param {message.IRelayUserInfo} message RelayUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RelayUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RelayUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof message.RelayUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.RelayUserInfo} RelayUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RelayUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RelayUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        message.Receiver = reader.string();
                        break;
                    }
                case 3: {
                        message.MsgId = reader.uint64();
                        break;
                    }
                case 4: {
                        message.SenderName = reader.string();
                        break;
                    }
                case 5: {
                        message.SenderAvatar = reader.string();
                        break;
                    }
                case 6: {
                        message.ReceiverName = reader.string();
                        break;
                    }
                case 7: {
                        message.ReceiverAvatar = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RelayUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.RelayUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.RelayUserInfo} RelayUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RelayUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RelayUserInfo message.
         * @function verify
         * @memberof message.RelayUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RelayUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                if (!$util.isString(message.Receiver))
                    return "Receiver: string expected";
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (!$util.isInteger(message.MsgId) && !(message.MsgId && $util.isInteger(message.MsgId.low) && $util.isInteger(message.MsgId.high)))
                    return "MsgId: integer|Long expected";
            if (message.SenderName != null && message.hasOwnProperty("SenderName"))
                if (!$util.isString(message.SenderName))
                    return "SenderName: string expected";
            if (message.SenderAvatar != null && message.hasOwnProperty("SenderAvatar"))
                if (!$util.isString(message.SenderAvatar))
                    return "SenderAvatar: string expected";
            if (message.ReceiverName != null && message.hasOwnProperty("ReceiverName"))
                if (!$util.isString(message.ReceiverName))
                    return "ReceiverName: string expected";
            if (message.ReceiverAvatar != null && message.hasOwnProperty("ReceiverAvatar"))
                if (!$util.isString(message.ReceiverAvatar))
                    return "ReceiverAvatar: string expected";
            return null;
        };

        /**
         * Creates a RelayUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RelayUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.RelayUserInfo} RelayUserInfo
         */
        RelayUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.message.RelayUserInfo)
                return object;
            var message = new $root.message.RelayUserInfo();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.Receiver != null)
                message.Receiver = String(object.Receiver);
            if (object.MsgId != null)
                if ($util.Long)
                    (message.MsgId = $util.Long.fromValue(object.MsgId)).unsigned = true;
                else if (typeof object.MsgId === "string")
                    message.MsgId = parseInt(object.MsgId, 10);
                else if (typeof object.MsgId === "number")
                    message.MsgId = object.MsgId;
                else if (typeof object.MsgId === "object")
                    message.MsgId = new $util.LongBits(object.MsgId.low >>> 0, object.MsgId.high >>> 0).toNumber(true);
            if (object.SenderName != null)
                message.SenderName = String(object.SenderName);
            if (object.SenderAvatar != null)
                message.SenderAvatar = String(object.SenderAvatar);
            if (object.ReceiverName != null)
                message.ReceiverName = String(object.ReceiverName);
            if (object.ReceiverAvatar != null)
                message.ReceiverAvatar = String(object.ReceiverAvatar);
            return message;
        };

        /**
         * Creates a plain object from a RelayUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RelayUserInfo
         * @static
         * @param {message.RelayUserInfo} message RelayUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RelayUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Sender = "";
                object.Receiver = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MsgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MsgId = options.longs === String ? "0" : 0;
                object.SenderName = "";
                object.SenderAvatar = "";
                object.ReceiverName = "";
                object.ReceiverAvatar = "";
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.Receiver != null && message.hasOwnProperty("Receiver"))
                object.Receiver = message.Receiver;
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (typeof message.MsgId === "number")
                    object.MsgId = options.longs === String ? String(message.MsgId) : message.MsgId;
                else
                    object.MsgId = options.longs === String ? $util.Long.prototype.toString.call(message.MsgId) : options.longs === Number ? new $util.LongBits(message.MsgId.low >>> 0, message.MsgId.high >>> 0).toNumber(true) : message.MsgId;
            if (message.SenderName != null && message.hasOwnProperty("SenderName"))
                object.SenderName = message.SenderName;
            if (message.SenderAvatar != null && message.hasOwnProperty("SenderAvatar"))
                object.SenderAvatar = message.SenderAvatar;
            if (message.ReceiverName != null && message.hasOwnProperty("ReceiverName"))
                object.ReceiverName = message.ReceiverName;
            if (message.ReceiverAvatar != null && message.hasOwnProperty("ReceiverAvatar"))
                object.ReceiverAvatar = message.ReceiverAvatar;
            return object;
        };

        /**
         * Converts this RelayUserInfo to JSON.
         * @function toJSON
         * @memberof message.RelayUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RelayUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RelayUserInfo
         * @function getTypeUrl
         * @memberof message.RelayUserInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RelayUserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.RelayUserInfo";
        };

        return RelayUserInfo;
    })();

    message.RelayGroupInfo = (function() {

        /**
         * Properties of a RelayGroupInfo.
         * @memberof message
         * @interface IRelayGroupInfo
         * @property {string|null} [Sender] RelayGroupInfo Sender
         * @property {string|null} [ReceiverGid] RelayGroupInfo ReceiverGid
         * @property {number|Long|null} [MsgId] RelayGroupInfo MsgId
         * @property {string|null} [SenderName] RelayGroupInfo SenderName
         * @property {string|null} [SenderAvatar] RelayGroupInfo SenderAvatar
         */

        /**
         * Constructs a new RelayGroupInfo.
         * @memberof message
         * @classdesc Represents a RelayGroupInfo.
         * @implements IRelayGroupInfo
         * @constructor
         * @param {message.IRelayGroupInfo=} [properties] Properties to set
         */
        function RelayGroupInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RelayGroupInfo Sender.
         * @member {string} Sender
         * @memberof message.RelayGroupInfo
         * @instance
         */
        RelayGroupInfo.prototype.Sender = "";

        /**
         * RelayGroupInfo ReceiverGid.
         * @member {string} ReceiverGid
         * @memberof message.RelayGroupInfo
         * @instance
         */
        RelayGroupInfo.prototype.ReceiverGid = "";

        /**
         * RelayGroupInfo MsgId.
         * @member {number|Long} MsgId
         * @memberof message.RelayGroupInfo
         * @instance
         */
        RelayGroupInfo.prototype.MsgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RelayGroupInfo SenderName.
         * @member {string} SenderName
         * @memberof message.RelayGroupInfo
         * @instance
         */
        RelayGroupInfo.prototype.SenderName = "";

        /**
         * RelayGroupInfo SenderAvatar.
         * @member {string} SenderAvatar
         * @memberof message.RelayGroupInfo
         * @instance
         */
        RelayGroupInfo.prototype.SenderAvatar = "";

        /**
         * Creates a new RelayGroupInfo instance using the specified properties.
         * @function create
         * @memberof message.RelayGroupInfo
         * @static
         * @param {message.IRelayGroupInfo=} [properties] Properties to set
         * @returns {message.RelayGroupInfo} RelayGroupInfo instance
         */
        RelayGroupInfo.create = function create(properties) {
            return new RelayGroupInfo(properties);
        };

        /**
         * Encodes the specified RelayGroupInfo message. Does not implicitly {@link message.RelayGroupInfo.verify|verify} messages.
         * @function encode
         * @memberof message.RelayGroupInfo
         * @static
         * @param {message.IRelayGroupInfo} message RelayGroupInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RelayGroupInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sender != null && Object.hasOwnProperty.call(message, "Sender"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Sender);
            if (message.ReceiverGid != null && Object.hasOwnProperty.call(message, "ReceiverGid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ReceiverGid);
            if (message.MsgId != null && Object.hasOwnProperty.call(message, "MsgId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.MsgId);
            if (message.SenderName != null && Object.hasOwnProperty.call(message, "SenderName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.SenderName);
            if (message.SenderAvatar != null && Object.hasOwnProperty.call(message, "SenderAvatar"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.SenderAvatar);
            return writer;
        };

        /**
         * Encodes the specified RelayGroupInfo message, length delimited. Does not implicitly {@link message.RelayGroupInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.RelayGroupInfo
         * @static
         * @param {message.IRelayGroupInfo} message RelayGroupInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RelayGroupInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RelayGroupInfo message from the specified reader or buffer.
         * @function decode
         * @memberof message.RelayGroupInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.RelayGroupInfo} RelayGroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RelayGroupInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RelayGroupInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Sender = reader.string();
                        break;
                    }
                case 2: {
                        message.ReceiverGid = reader.string();
                        break;
                    }
                case 3: {
                        message.MsgId = reader.uint64();
                        break;
                    }
                case 4: {
                        message.SenderName = reader.string();
                        break;
                    }
                case 5: {
                        message.SenderAvatar = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RelayGroupInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.RelayGroupInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.RelayGroupInfo} RelayGroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RelayGroupInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RelayGroupInfo message.
         * @function verify
         * @memberof message.RelayGroupInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RelayGroupInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                if (!$util.isString(message.Sender))
                    return "Sender: string expected";
            if (message.ReceiverGid != null && message.hasOwnProperty("ReceiverGid"))
                if (!$util.isString(message.ReceiverGid))
                    return "ReceiverGid: string expected";
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (!$util.isInteger(message.MsgId) && !(message.MsgId && $util.isInteger(message.MsgId.low) && $util.isInteger(message.MsgId.high)))
                    return "MsgId: integer|Long expected";
            if (message.SenderName != null && message.hasOwnProperty("SenderName"))
                if (!$util.isString(message.SenderName))
                    return "SenderName: string expected";
            if (message.SenderAvatar != null && message.hasOwnProperty("SenderAvatar"))
                if (!$util.isString(message.SenderAvatar))
                    return "SenderAvatar: string expected";
            return null;
        };

        /**
         * Creates a RelayGroupInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RelayGroupInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.RelayGroupInfo} RelayGroupInfo
         */
        RelayGroupInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.message.RelayGroupInfo)
                return object;
            var message = new $root.message.RelayGroupInfo();
            if (object.Sender != null)
                message.Sender = String(object.Sender);
            if (object.ReceiverGid != null)
                message.ReceiverGid = String(object.ReceiverGid);
            if (object.MsgId != null)
                if ($util.Long)
                    (message.MsgId = $util.Long.fromValue(object.MsgId)).unsigned = true;
                else if (typeof object.MsgId === "string")
                    message.MsgId = parseInt(object.MsgId, 10);
                else if (typeof object.MsgId === "number")
                    message.MsgId = object.MsgId;
                else if (typeof object.MsgId === "object")
                    message.MsgId = new $util.LongBits(object.MsgId.low >>> 0, object.MsgId.high >>> 0).toNumber(true);
            if (object.SenderName != null)
                message.SenderName = String(object.SenderName);
            if (object.SenderAvatar != null)
                message.SenderAvatar = String(object.SenderAvatar);
            return message;
        };

        /**
         * Creates a plain object from a RelayGroupInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RelayGroupInfo
         * @static
         * @param {message.RelayGroupInfo} message RelayGroupInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RelayGroupInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Sender = "";
                object.ReceiverGid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.MsgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MsgId = options.longs === String ? "0" : 0;
                object.SenderName = "";
                object.SenderAvatar = "";
            }
            if (message.Sender != null && message.hasOwnProperty("Sender"))
                object.Sender = message.Sender;
            if (message.ReceiverGid != null && message.hasOwnProperty("ReceiverGid"))
                object.ReceiverGid = message.ReceiverGid;
            if (message.MsgId != null && message.hasOwnProperty("MsgId"))
                if (typeof message.MsgId === "number")
                    object.MsgId = options.longs === String ? String(message.MsgId) : message.MsgId;
                else
                    object.MsgId = options.longs === String ? $util.Long.prototype.toString.call(message.MsgId) : options.longs === Number ? new $util.LongBits(message.MsgId.low >>> 0, message.MsgId.high >>> 0).toNumber(true) : message.MsgId;
            if (message.SenderName != null && message.hasOwnProperty("SenderName"))
                object.SenderName = message.SenderName;
            if (message.SenderAvatar != null && message.hasOwnProperty("SenderAvatar"))
                object.SenderAvatar = message.SenderAvatar;
            return object;
        };

        /**
         * Converts this RelayGroupInfo to JSON.
         * @function toJSON
         * @memberof message.RelayGroupInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RelayGroupInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RelayGroupInfo
         * @function getTypeUrl
         * @memberof message.RelayGroupInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RelayGroupInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.RelayGroupInfo";
        };

        return RelayGroupInfo;
    })();

    message.RelayInfo = (function() {

        /**
         * Properties of a RelayInfo.
         * @memberof message
         * @interface IRelayInfo
         * @property {string|null} [OldReceiver] RelayInfo OldReceiver
         * @property {number|Long|null} [OldMsgId] RelayInfo OldMsgId
         * @property {string|null} [NewReceiver] RelayInfo NewReceiver
         * @property {number|Long|null} [NewMsgId] RelayInfo NewMsgId
         * @property {number|null} [NewReceiverType] RelayInfo NewReceiverType
         */

        /**
         * Constructs a new RelayInfo.
         * @memberof message
         * @classdesc Represents a RelayInfo.
         * @implements IRelayInfo
         * @constructor
         * @param {message.IRelayInfo=} [properties] Properties to set
         */
        function RelayInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RelayInfo OldReceiver.
         * @member {string} OldReceiver
         * @memberof message.RelayInfo
         * @instance
         */
        RelayInfo.prototype.OldReceiver = "";

        /**
         * RelayInfo OldMsgId.
         * @member {number|Long} OldMsgId
         * @memberof message.RelayInfo
         * @instance
         */
        RelayInfo.prototype.OldMsgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RelayInfo NewReceiver.
         * @member {string} NewReceiver
         * @memberof message.RelayInfo
         * @instance
         */
        RelayInfo.prototype.NewReceiver = "";

        /**
         * RelayInfo NewMsgId.
         * @member {number|Long} NewMsgId
         * @memberof message.RelayInfo
         * @instance
         */
        RelayInfo.prototype.NewMsgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RelayInfo NewReceiverType.
         * @member {number} NewReceiverType
         * @memberof message.RelayInfo
         * @instance
         */
        RelayInfo.prototype.NewReceiverType = 0;

        /**
         * Creates a new RelayInfo instance using the specified properties.
         * @function create
         * @memberof message.RelayInfo
         * @static
         * @param {message.IRelayInfo=} [properties] Properties to set
         * @returns {message.RelayInfo} RelayInfo instance
         */
        RelayInfo.create = function create(properties) {
            return new RelayInfo(properties);
        };

        /**
         * Encodes the specified RelayInfo message. Does not implicitly {@link message.RelayInfo.verify|verify} messages.
         * @function encode
         * @memberof message.RelayInfo
         * @static
         * @param {message.IRelayInfo} message RelayInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RelayInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.OldReceiver != null && Object.hasOwnProperty.call(message, "OldReceiver"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.OldReceiver);
            if (message.OldMsgId != null && Object.hasOwnProperty.call(message, "OldMsgId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.OldMsgId);
            if (message.NewReceiver != null && Object.hasOwnProperty.call(message, "NewReceiver"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.NewReceiver);
            if (message.NewMsgId != null && Object.hasOwnProperty.call(message, "NewMsgId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.NewMsgId);
            if (message.NewReceiverType != null && Object.hasOwnProperty.call(message, "NewReceiverType"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.NewReceiverType);
            return writer;
        };

        /**
         * Encodes the specified RelayInfo message, length delimited. Does not implicitly {@link message.RelayInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof message.RelayInfo
         * @static
         * @param {message.IRelayInfo} message RelayInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RelayInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RelayInfo message from the specified reader or buffer.
         * @function decode
         * @memberof message.RelayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {message.RelayInfo} RelayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RelayInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.message.RelayInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.OldReceiver = reader.string();
                        break;
                    }
                case 2: {
                        message.OldMsgId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.NewReceiver = reader.string();
                        break;
                    }
                case 4: {
                        message.NewMsgId = reader.uint64();
                        break;
                    }
                case 5: {
                        message.NewReceiverType = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RelayInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof message.RelayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {message.RelayInfo} RelayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RelayInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RelayInfo message.
         * @function verify
         * @memberof message.RelayInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RelayInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.OldReceiver != null && message.hasOwnProperty("OldReceiver"))
                if (!$util.isString(message.OldReceiver))
                    return "OldReceiver: string expected";
            if (message.OldMsgId != null && message.hasOwnProperty("OldMsgId"))
                if (!$util.isInteger(message.OldMsgId) && !(message.OldMsgId && $util.isInteger(message.OldMsgId.low) && $util.isInteger(message.OldMsgId.high)))
                    return "OldMsgId: integer|Long expected";
            if (message.NewReceiver != null && message.hasOwnProperty("NewReceiver"))
                if (!$util.isString(message.NewReceiver))
                    return "NewReceiver: string expected";
            if (message.NewMsgId != null && message.hasOwnProperty("NewMsgId"))
                if (!$util.isInteger(message.NewMsgId) && !(message.NewMsgId && $util.isInteger(message.NewMsgId.low) && $util.isInteger(message.NewMsgId.high)))
                    return "NewMsgId: integer|Long expected";
            if (message.NewReceiverType != null && message.hasOwnProperty("NewReceiverType"))
                if (!$util.isInteger(message.NewReceiverType))
                    return "NewReceiverType: integer expected";
            return null;
        };

        /**
         * Creates a RelayInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof message.RelayInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {message.RelayInfo} RelayInfo
         */
        RelayInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.message.RelayInfo)
                return object;
            var message = new $root.message.RelayInfo();
            if (object.OldReceiver != null)
                message.OldReceiver = String(object.OldReceiver);
            if (object.OldMsgId != null)
                if ($util.Long)
                    (message.OldMsgId = $util.Long.fromValue(object.OldMsgId)).unsigned = true;
                else if (typeof object.OldMsgId === "string")
                    message.OldMsgId = parseInt(object.OldMsgId, 10);
                else if (typeof object.OldMsgId === "number")
                    message.OldMsgId = object.OldMsgId;
                else if (typeof object.OldMsgId === "object")
                    message.OldMsgId = new $util.LongBits(object.OldMsgId.low >>> 0, object.OldMsgId.high >>> 0).toNumber(true);
            if (object.NewReceiver != null)
                message.NewReceiver = String(object.NewReceiver);
            if (object.NewMsgId != null)
                if ($util.Long)
                    (message.NewMsgId = $util.Long.fromValue(object.NewMsgId)).unsigned = true;
                else if (typeof object.NewMsgId === "string")
                    message.NewMsgId = parseInt(object.NewMsgId, 10);
                else if (typeof object.NewMsgId === "number")
                    message.NewMsgId = object.NewMsgId;
                else if (typeof object.NewMsgId === "object")
                    message.NewMsgId = new $util.LongBits(object.NewMsgId.low >>> 0, object.NewMsgId.high >>> 0).toNumber(true);
            if (object.NewReceiverType != null)
                message.NewReceiverType = object.NewReceiverType >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RelayInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof message.RelayInfo
         * @static
         * @param {message.RelayInfo} message RelayInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RelayInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.OldReceiver = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.OldMsgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OldMsgId = options.longs === String ? "0" : 0;
                object.NewReceiver = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.NewMsgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NewMsgId = options.longs === String ? "0" : 0;
                object.NewReceiverType = 0;
            }
            if (message.OldReceiver != null && message.hasOwnProperty("OldReceiver"))
                object.OldReceiver = message.OldReceiver;
            if (message.OldMsgId != null && message.hasOwnProperty("OldMsgId"))
                if (typeof message.OldMsgId === "number")
                    object.OldMsgId = options.longs === String ? String(message.OldMsgId) : message.OldMsgId;
                else
                    object.OldMsgId = options.longs === String ? $util.Long.prototype.toString.call(message.OldMsgId) : options.longs === Number ? new $util.LongBits(message.OldMsgId.low >>> 0, message.OldMsgId.high >>> 0).toNumber(true) : message.OldMsgId;
            if (message.NewReceiver != null && message.hasOwnProperty("NewReceiver"))
                object.NewReceiver = message.NewReceiver;
            if (message.NewMsgId != null && message.hasOwnProperty("NewMsgId"))
                if (typeof message.NewMsgId === "number")
                    object.NewMsgId = options.longs === String ? String(message.NewMsgId) : message.NewMsgId;
                else
                    object.NewMsgId = options.longs === String ? $util.Long.prototype.toString.call(message.NewMsgId) : options.longs === Number ? new $util.LongBits(message.NewMsgId.low >>> 0, message.NewMsgId.high >>> 0).toNumber(true) : message.NewMsgId;
            if (message.NewReceiverType != null && message.hasOwnProperty("NewReceiverType"))
                object.NewReceiverType = message.NewReceiverType;
            return object;
        };

        /**
         * Converts this RelayInfo to JSON.
         * @function toJSON
         * @memberof message.RelayInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RelayInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RelayInfo
         * @function getTypeUrl
         * @memberof message.RelayInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RelayInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/message.RelayInfo";
        };

        return RelayInfo;
    })();

    return message;
})();

module.exports = $root;
