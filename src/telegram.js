/**
 * MIT License
 * 
 * Copyright (c) 2023 Maksym Stoianov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



/**
 * Сервис TelegramApp.
 * @class               TelegramApp
 * @namespace           TelegramApp
 * @version             1.1.0
 * @author              Maksym Stoianov <stoianov.maksym@gmail.com>
 * @license             MIT
 * @borrows             TelegramApp#newTelegram as TelegramApp#init
 * @borrows             TelegramApp#newTelegram as TelegramApp#open
 * @borrows             TelegramApp#newTelegram as TelegramApp#newBot
 * @borrows             TelegramApp#newTelegram as TelegramApp#newTelegramBot
 * @borrows             TelegramApp#newTelegram as TelegramApp#create
 * @borrows             TelegramApp#newTelegram as TelegramApp#createBot
 * @borrows             TelegramApp#newTelegram as TelegramApp#createTelegram
 * @borrows             TelegramApp#newTelegram as TelegramApp#createTelegramBot
 * @tutorial            https://maksymstoianov.com/
 * @see                 [GitHub](https://github.com/MaksymStoianov/TelegramApp)
 * @see                 https://core.telegram.org/bots/api
 * 
 * @todo Добавить остальные методы и классы.
 */
class TelegramApp {

  /**
   * Создает и возвращает экземпляр класса [`Telegram`]().
   * 
   * #### Example
   * ```javascript
   * const token = '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11';
   * const bot = TelegramApp.newTelegram(token);
   * 
   * const result = bot.getMe();
   *
   * console.log(result);
   * ```
   * @param {string} [token]
   * @return {TelegramApp.Telegram}
   */
  static newTelegram(...args) {
    return Reflect.construct(this.Telegram, args);
  }

  /**
   * @param {string} [token]
   * @return {TelegramApp.Telegram}
   */
  static newTelegramBot(...args) {
    return Reflect.construct(this.Telegram, args);
  }

  /**
   * @param {string} [token]
   * @return {TelegramApp.Telegram}
   */
  static init(...args) {
    return Reflect.construct(this.Telegram, args);
  }

  /**
   * @param {string} [token]
   * @return {TelegramApp.Telegram}
   */
  static open(...args) {
    return Reflect.construct(this.Telegram, args);
  }

  /**
   * @param {string} [token]
   * @return {TelegramApp.Telegram}
   */
  static newBot(...args) {
    return Reflect.construct(this.Telegram, args);
  }

  /**
   * @param {string} [token]
   * @return {TelegramApp.Telegram}
   */
  static create(...args) {
    return Reflect.construct(this.Telegram, args);
  }

  /**
   * @param {string} [token]
   * @return {TelegramApp.Telegram}
   */
  static createBot(...args) {
    return Reflect.construct(this.Telegram, args);
  }

  /**
   * @param {string} [token]
   * @return {TelegramApp.Telegram}
   */
  static createTelegram(...args) {
    return Reflect.construct(this.Telegram, args);
  }

  /**
   * @param {string} [token]
   * @return {TelegramApp.Telegram}
   */
  static createTelegramBot(...args) {
    return Reflect.construct(this.Telegram, args);
  }



  /**
   * Создает и возвращает экземпляр класса [`Update`]().
   * @return {TelegramApp.Update}
   */
  static newUpdate(...args) {
    return Reflect.construct(this.Update, args);
  }



  /**
   * Создает и возвращает экземпляр класса [`WebhookInfo`]().
   * @return {TelegramApp.WebhookInfo}
   */
  static newWebhookInfo(...args) {
    return Reflect.construct(this.WebhookInfo, args);
  }



  /**
   * Создает и возвращает экземпляр класса [`User`]().
   * @return {TelegramApp.User}
   */
  static newUser(...args) {
    return Reflect.construct(this.User, args);
  }



  /**
   * Создает и возвращает экземпляр класса [`Chat`]().
   * @return {TelegramApp.Chat}
   */
  static newChat(...args) {
    return Reflect.construct(this.Chat, args);
  }



  /**
   * Создает и возвращает экземпляр класса [`ChatFullInfo`]().
   * @return {TelegramApp.ChatFullInfo}
   */
  static newChatFullInfo(...args) {
    return Reflect.construct(this.ChatFullInfo, args);
  }



  /**
   * Создает и возвращает экземпляр класса [`Message`]().
   * @return {TelegramApp.Message}
   */
  static newMessage(...args) {
    return Reflect.construct(this.Message, args);
  }



  /**
   * Создает и возвращает экземпляр класса [`MessageId`]().
   * @return {TelegramApp.MessageId}
   */
  static newMessageId(...args) {
    return Reflect.construct(this.MessageId, args);
  }



  // ...



  /**
   * Создает и возвращает экземпляр класса [`File`]().
   * @return {TelegramApp.File}
   */
  static newFile(...args) {
    return Reflect.construct(this.File, args);
  }



  // ...



  /**
   * Создает и возвращает экземпляр класса [`BotCommand`]().
   * @return {TelegramApp.BotCommand}
   */
  static newBotCommand(...args) {
    return Reflect.construct(this.BotCommand, args);
  }



  // ...



  /**
   * Проверяет, является ли заданное значение объектом типа [`Telegram`]().
   * @param {*} input Объект для проверки.
   * @return {boolean} `true`, если объект является `Telegram`; иначе, `false`.
   */
  static isTelegram(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isTelegram.`);
    }

    return (input instanceof this.Telegram);
  }



  /**
   * Возвращает `true`, если объект является [`Update`](); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isUpdate(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isUpdate.`);
    }

    return (input instanceof this.Update);
  }



  /**
   * Возвращает `true`, если объект является [`WebhookInfo`](); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isWebhookInfo(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isWebhookInfo.`);
    }

    return (input instanceof this.WebhookInfo);
  }



  /**
   * Возвращает `true`, если объект является [`User`](); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isUser(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isUser.`);
    }

    return (input instanceof this.User);
  }



  /**
   * Возвращает `true`, если объект является [`Chat`](); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isChat(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isChat.`);
    }

    return (input instanceof this.Chat);
  }



  /**
   * Возвращает `true`, если объект является [`ChatFullInfo`](); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isChatFullInfo(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isChatFullInfo.`);
    }

    return (input instanceof this.ChatFullInfo);
  }



  /**
   * Возвращает `true`, если объект является [`Message`](); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isMessage(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isMessage.`);
    }

    return (input instanceof this.Message);
  }



  /**
   * Возвращает `true`, если объект является [`MessageId`](); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isMessageId(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isMessageId.`);
    }

    return (input instanceof this.MessageId);
  }



  // ...



  /**
   * Возвращает `true`, если объект является [`File`](); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isFile(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isFile.`);
    }

    return (input instanceof this.File);
  }



  // ...



  /**
   * Возвращает `true`, если объект является [`BotCommand`](); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isBotCommand(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isBotCommand.`);
    }

    return (input instanceof this.BotCommand);
  }



  // ...


  /**
   * Возвращает `true`, если объект является [`Object`](); иначе, `false`.
   * @param {*} input Объект для проверки.
   * @return {boolean}
   */
  static isObject(input) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.name}.isObject.`);
    }

    return (
      input === Object(input) &&
      !Array.isArray(input)
    );
  }



  constructor() {
    throw new Error(`${this.constructor.name} is not a constructor.`);
  }

}





/**
 * Конструктор 'Telegram' - представляет собой объект для работы с ...
 * @class               Telegram
 * @memberof            TelegramApp
 * @version             1.1.0
 * @since               1.1.0
 */
TelegramApp.Telegram = class Telegram {

  /**
   * @param {*} input 
   * @return {boolean}
   */
  static isValidToken(input) {
    return (
      typeof input === 'string' &&
      input.length &&
      this.RegExp.TOKEN.test(input)
    );
  }



  /**
   * @param {string} [token] Токен.
   */
  constructor(token) {

    /**
     * @type {string}
     */
    this.url = 'https://api.telegram.org';


    /**
     * @private
     * @type {string}
     */
    Object.defineProperty(this, 'token', {
      "configurable": true,
      "enumerable": false,
      "writable": true,
      "value": null
    });


    if (token) {
      this.setToken(token);
    }

  }



  /**
   * @private
   * @param {string} path 
   * @param {Object} payload 
   * @return {*}
   */
  _fetch(path, payload) {
    if (!this.token) {
      throw new Error(`The token has an invalid value.`);
    }


    /**
     * @type {string}
     */
    const url = `${this.url}/bot${this.token}/${path}`;


    /**
     * @type {Object}
     */
    const params = {
      "method": 'post',
      "contentType": 'application/json',
      "muteHttpExceptions": true
    };


    if (Object.isObject(payload)) {
      params.payload = JSON.stringify(payload);
    }

    const response = UrlFetchApp.fetch(url, params);

    const responseCode = response.getResponseCode();

    if (!(responseCode >= 200 && responseCode < 300)) {
      throw new Error(`Response Code ${responseCode}!`);
    }

    let result = response.getContentText();

    const headers = new Map(Object.entries(response.getHeaders() ?? {}));

    const contentType = headers?.get('Content-Type');

    if (contentType === 'application/json') {
      result = JSON.parse(result);
    }

    if (result?.ok !== true) {
      throw new Error(result?.description ?? result);
    }

    return (result?.result ?? true);
  }



  /**
   * Устанавливает токен.
   * @param {string} token Токен (например: '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11').
   */
  setToken(token) {
    if (!arguments.length) {
      throw new Error(`The parameters () don't match any method signature for ${this.constructor.name}.setToken.`);
    }

    if (!this.constructor.isValidToken(token)) {
      throw new TypeError(`Невалидный параметр "token".`);
    }

    this.token = token;

    return this;
  }



  /**
   * Возвращает токен.
   * @return {string}
   */
  getToken() {
    return this.token;
  }



  /**
   * Получает входящие обновления с помощью длительного опроса.
   * @param {Object} [options = {}]
   *  @param {Integer} [options.offset] 
   *  @param {Integer} [options.limit = 100] 
   *  @param {Integer} [options.timeout = 0] 
   *  @param {string[]} [options.allowed_updates] 
   * @return {Update[]} Возвращается массив объектов обновления.
   */
  getUpdates(options = {}) {
    if (!Object.isObject(options)) {
      throw new TypeError(`Параметры (${typeof options}) не соответствуют сигнатуре метода ${this.constructor.name}.getUpdates.`);
    }

    if (options.hasOwnProperty('offset') && !Number.isInteger(options.offset)) {
      throw new TypeError(`Параметр "options.offset" не соответствует сигнатуре метода ${this.constructor.name}.getUpdates.`);
    }

    if (options.hasOwnProperty('limit') && !(Number.isInteger(options.limit) && options.limit > 0 && options.limit <= 100)) {
      throw new TypeError(`Параметр "options.limit" не соответствует сигнатуре метода ${this.constructor.name}.getUpdates.`);
    }

    if (options.hasOwnProperty('timeout') && !(Number.isInteger(options.timeout) && options.timeout >= 0)) {
      throw new TypeError(`Параметр "options.timeout" не соответствует сигнатуре метода ${this.constructor.name}.getUpdates.`);
    }

    if (options.hasOwnProperty('allowed_updates') && !Array.isArray(options.allowed_updates)) {
      throw new TypeError(`Параметр "options.allowed_updates" не соответствует сигнатуре метода ${this.constructor.name}.getUpdates.`);
    }

    return (this._fetch('getUpdates', options) ?? [])
      .map(item => TelegramApp.newUpdate(item));
  }



  /**
   * Устанавливает интеграцию с веб-перехватчиком.
   * @param {string} url
   * @return {boolean} `true` в случае успеха.
   */
  setWebhook(url) {
    if (!arguments.length) {
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.setWebhook.`);
    }

    if (!(typeof url === 'string' && url.startsWith('http'))) {
      throw new TypeError(`Параметр "url" не является url-адресом.`);
    }

    return this._fetch('setWebhook', { url });
  }



  /**
   * Удаляет интеграцию с веб-перехватчиком.
   * @return {boolean} `true` в случае успеха.
   */
  deleteWebhook() {
    return this._fetch('deleteWebhook');
  }



  /**
   * Возвращает текущий статус веб-перехватчика.
   * @return {WebhookInfo}
   */
  getWebhookInfo() {
    return TelegramApp.newWebhookInfo(this._fetch('getWebhookInfo'));
  }



  /**
   * Возвращает основную информацию о боте.
   * @return {User}
   */
  getMe() {
    return TelegramApp.newUser(this._fetch('getMe'));
  }



  /**
   * Выходит с сервера API облачного бота перед локальным запуском бота.
   * @return {boolean} `true` в случае успеха.
   */
  logOut() {
    return this._fetch('logOut');
  }



  /**
   * Закрывает экземпляр бота перед перемещением его с одного локального сервера на другой.
   * @return {boolean} `true` в случае успеха.
   */
  close() {
    return this._fetch('close');
  }



  /**
   * Отправляет текстовое сообщение.
   * @param {(string|Integer)} chatId Уникальный идентификатор целевого чата или имя пользователя целевого канала.
   * @param {string} text Текст отправляемого сообщения.
   * @param {Object} [options={}] Опциональные параметры.
   * @return {Message} В случае успеха отправленное сообщение возвращается.
   */
  sendMessage(chatId, text, options = {}) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.sendMessage.`);

    if (!['string', 'number'].includes(typeof chatId))
      throw new TypeError(`Параметры (${typeof chatId}) не соответствуют сигнатуре метода ${this.constructor.name}.sendMessage.`);

    data.chat_id = String(chatId).trim();

    if (!data.chat_id.length)
      throw new Error(`Параметр chat_id невалиден.`);

    if (!['string', 'number'].includes(typeof text))
      throw new TypeError(`Параметры (${typeof chatId}, ${typeof text}) не соответствуют сигнатуре метода ${this.constructor.name}.sendMessage.`);

    data.text = String(text);

    if (!data.text.length)
      throw new Error(`Параметр text невалиден.`);

    if (arguments[2]) {
      if (!Object.isObject(options))
        throw new TypeError(`Параметры (${typeof chatId}, ${typeof text}, ${typeof options}) не соответствуют сигнатуре метода ${this.constructor.name}.sendMessage.`);

      const { parse_mode, entities, disable_web_page_preview, disable_notification, reply_to_message_id, allow_sending_without_reply, reply_markup } = options;

      if (parse_mode) {
        if (typeof parse_mode !== 'string')
          throw new TypeError(`Параметр options.parse_mode не соответствует сигнатуре метода ${this.constructor.name}.sendMessage.`);

        data.parse_mode = parse_mode;
      }

      if (entities) {
        if (!Object.isObject(entities))
          throw new TypeError(`Параметр options.entities не соответствует сигнатуре метода ${this.constructor.name}.sendMessage.`);

        data.entities = entities;
      }

      if (disable_web_page_preview) {
        if (typeof disable_web_page_preview !== 'boolean')
          throw new TypeError(`Параметр options.disable_web_page_preview не соответствует сигнатуре метода ${this.constructor.name}.sendMessage.`);

        data.disable_web_page_preview = disable_web_page_preview;
      }

      if (disable_notification) {
        if (typeof disable_notification !== 'boolean')
          throw new TypeError(`Параметр options.disable_notification не соответствует сигнатуре метода ${this.constructor.name}.sendMessage.`);

        data.disable_notification = disable_notification;
      }

      if (reply_to_message_id) {
        if (!Number.isInteger(reply_to_message_id))
          throw new TypeError(`Параметр options.reply_to_message_id не соответствует сигнатуре метода ${this.constructor.name}.sendMessage.`);

        data.reply_to_message_id = reply_to_message_id;
      }

      if (allow_sending_without_reply) {
        if (typeof allow_sending_without_reply !== 'boolean')
          throw new TypeError(`Параметр options.allow_sending_without_reply не соответствует сигнатуре метода ${this.constructor.name}.sendMessage.`);

        data.allow_sending_without_reply = allow_sending_without_reply;
      }

      if (reply_markup) {
        if (!Object.isObject(reply_markup))
          throw new TypeError(`Параметр options.reply_markup не соответствует сигнатуре метода ${this.constructor.name}.sendMessage.`);

        data.reply_markup = reply_markup;
      }
    }

    return TelegramApp.newMessage(this._fetch('sendMessage', data));
  }



  /**
   * Пересылает любое (кроме служебных) сообщение.
   * @param {(string|Integer)} chatId Уникальный идентификатор целевого чата или имя пользователя целевого канала.
   * @param {(string|Integer)} fromChatId Уникальный идентификатор чата, в который было отправлено исходное сообщение (или имя пользователя канала в формате @channelusername).
   * @param {Integer} messageId Идентификатор сообщения в чате, указанный в fromChatId.
   * @param {Object} [options={}] Опциональные параметры.
   * @return {Message} В случае успеха отправленное сообщение возвращается.
   */
  forwardMessage(chatId, fromChatId, messageId, options = {}) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.forwardMessage.`);

    const data = {};

    if (!(['string', 'number'].includes(typeof chatId) && String(chatId).trim().length))
      throw new TypeError(`Параметры (${typeof chatId}) не соответствуют сигнатуре метода ${this.constructor.name}.forwardMessage.`);

    data.chat_id = String(chatId).trim();

    if (!(['string', 'number'].includes(typeof fromChatId) && String(fromChatId).trim().length))
      throw new TypeError(`Параметры (${typeof chatId}, ${typeof fromChatId}) не соответствуют сигнатуре метода ${this.constructor.name}.forwardMessage.`);

    data.from_chat_id = String(fromChatId).trim();

    if (!(typeof messageId === 'number' && Number.isInteger(messageId)))
      throw new TypeError(`Параметры (${typeof chatId}, ${typeof fromChatId}, ${typeof messageId}) не соответствуют сигнатуре метода ${this.constructor.name}.forwardMessage.`);

    data.message_id = messageId;

    if (arguments[3]) {
      if (!Object.isObject(options))
        throw new TypeError(`Параметры (${typeof chatId}, ${typeof fromChatId}, ${typeof messageId}, ${typeof options}) не соответствуют сигнатуре метода ${this.constructor.name}.forwardMessage.`);

      if ((item => typeof item === 'string' && item.trim().length)(options.disable_notification))
        data.disable_notification = options.disable_notification;
    }

    return TelegramApp.newMessage(this._fetch('forwardMessage', data));
  }



  forwardMessages() {
    throw new Error(`The method is under development!`);
  }



  copyMessage() {
    throw new Error(`The method is under development!`);
  }



  copyMessages() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Отправляет фотографию.
   * @param {(string|Integer)} chatId Уникальный идентификатор целевого чата или имя пользователя целевого канала.
   * @param {(InputFile|string)} photo Фото для отправки.
   * @param {Object} [options={}] Опциональные параметры.
   * @return {Message} В случае успеха отправленное сообщение возвращается.
   */
  sendPhoto(chatId, photo, options = {}) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.sendPhoto.`);

    const data = {};

    if (!(['string', 'number'].includes(typeof chatId) && String(chatId).trim().length))
      throw new TypeError(`Параметры (${typeof chatId}) не соответствуют сигнатуре метода ${this.constructor.name}.sendPhoto.`);

    data.chat_id = String(chatId).trim();

    if (!(typeof photo === 'string' && photo.length))
      throw new TypeError(`Параметры (${typeof chatId}, ${typeof photo}) не соответствуют сигнатуре метода ${this.constructor.name}.sendPhoto.`);

    data.photo = photo;

    if (arguments[2]) {
      if (!Object.isObject(options))
        throw new TypeError(`Параметры (${typeof chatId}, ${typeof photo}, ${typeof options}) не соответствуют сигнатуре метода ${this.constructor.name}.sendPhoto.`);

      if ((item => typeof item === 'string' && item.trim().length)(options.caption))
        data.caption = options.caption;

      if ((item => typeof item === 'string' && item.trim().length)(options.parse_mode))
        data.parse_mode = options.parse_mode;

      if ((item => Array.isArray(item) && item.length)(options.caption_entities))
        data.caption_entities = options.caption_entities;

      if ((item => typeof item === 'boolean')(options.disable_notification))
        data.disable_notification = options.disable_notification;

      if (!(item => typeof item === 'number' && Number.isInteger(item))(options.reply_to_message_id))
        data.reply_to_message_id = options.reply_to_message_id;

      if ((item => typeof item === 'boolean')(options.allow_sending_without_reply))
        data.allow_sending_without_reply = options.allow_sending_without_reply;

      if (Object.isObject(options.reply_markup))
        data.reply_markup = options.reply_markup;
    }

    return TelegramApp.newMessage(this._fetch('sendPhoto', data));
  }



  sendAudio() {
    throw new Error(`The method is under development!`);
  }



  sendDocument() {
    throw new Error(`The method is under development!`);
  }



  sendVideo() {
    throw new Error(`The method is under development!`);
  }



  sendAnimation() {
    throw new Error(`The method is under development!`);
  }



  sendVoice() {
    throw new Error(`The method is under development!`);
  }



  sendVideoNote() {
    throw new Error(`The method is under development!`);
  }



  sendPaidMedia() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Отправляет группу медиа-файлов.
   * @param {(string|Integer)} chatId Уникальный идентификатор целевого чата или имя пользователя целевого канала.
   * @param {Object[]} media Массив, описывающий медиа-файлы для отправки, должен включать 2-10 элементов.
   * @param {Object} [options={}] Опциональные параметры.
   */
  sendMediaGroup(chatId, media, options = {}) {
    // Проверка chatId
    if (typeof chatId !== 'string' && typeof chatId !== 'number')
      throw new TypeError(`Неверный тип chatId: ${typeof chatId}.`);

    // Проверка media
    if (!Array.isArray(media) || media.length < 2 || media.length > 10)
      throw new Error(`Неверный формат media.`);

    const data = {
      chat_id: chatId,
      media: JSON.stringify(media)
    };

    // Обработка опциональных параметров
    if (typeof options !== 'object' || options === null)
      throw new TypeError(`Ожидался объект для options, получен ${typeof options}.`);

    // Перечисление всех возможных опциональных параметров
    const optionKeys = ['disable_notification', 'protect_content', 'reply_to_message_id', 'allow_sending_without_reply', 'message_thread_id'];

    optionKeys.forEach(key => {
      if (key in options) {
        switch (key) {
          case 'disable_notification':
          case 'protect_content':
          case 'allow_sending_without_reply':
            if (typeof options[key] !== 'boolean') {
              throw new TypeError(`Ожидался boolean для ${key}, получен ${typeof options[key]}.`);
            }
            break;
          case 'reply_to_message_id':
          case 'message_thread_id':
            if (typeof options[key] !== 'number') {
              throw new TypeError(`Ожидался number для ${key}, получен ${typeof options[key]}.`);
            }
            break;
          default:
            // Неизвестный параметр
            throw new Error(`Неизвестный параметр: ${key}.`);
        }
        data[key] = options[key];
      }
    });

    // Отправка запроса
    return this._fetch('sendMediaGroup', data);
  }



  sendLocation() {
    throw new Error(`The method is under development!`);
  }



  sendVenue() {
    throw new Error(`The method is under development!`);
  }



  sendContact() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Отправляет опрос. В случае успеха отправленное сообщение возвращается.
   * @param {(string|Integer)} chatId Уникальный идентификатор целевого чата или имя пользователя целевого канала.
   * @param {string} question Вопрос для опроса, 1–300 символов.
   * @param {string[]} answers Список вариантов ответа, 2–10 строк по 1–100 символов каждая.
   * @param {Object} [options={}] Опциональные параметры.
   */
  sendPoll(chatId, question, answers, options = {}) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.sendPoll.`);

    // Проверка основных параметров
    if (typeof chatId !== 'string' && typeof chatId !== 'number')
      throw new TypeError(`Неверный тип chatId: ${typeof chatId}.`);

    if (typeof question !== 'string' || question.length < 1 || question.length > 300)
      throw new Error(`Неверная длина question: ${question.length}.`);

    if (!Array.isArray(answers) || answers.some(answer => typeof answer !== 'string' || answer.length < 1 || answer.length > 100) || answers.length < 2 || answers.length > 10)
      throw new Error(`Неверный формат answers.`);

    const data = {
      chat_id: chatId,
      question: question,
      options: JSON.stringify(answers)
    };

    // Обработка опциональных параметров
    if (typeof options !== 'object' || options === null)
      throw new TypeError(`Ожидался объект для options, получен ${typeof options}.`);

    // Перечисление всех возможных опциональных параметров
    const optionKeys = ['is_anonymous', 'type', 'allows_multiple_answers', 'correct_option_id',
      'explanation', 'explanation_parse_mode', 'explanation_entities',
      'open_period', 'close_date', 'is_closed', 'disable_notification',
      'protect_content', 'reply_to_message_id', 'allow_sending_without_reply',
      'reply_markup', 'message_thread_id'];

    optionKeys.forEach(key => {
      if (!(key in options)) return;

      let value = options[key];

      // Проверка каждого параметра по типу
      switch (key) {
        case 'is_anonymous':
        case 'allows_multiple_answers':
        case 'is_closed':
        case 'disable_notification':
        case 'protect_content':
        case 'allow_sending_without_reply':
          if (typeof value !== 'boolean')
            throw new TypeError(`Ожидался boolean для ${key}, получен ${typeof value}.`);
          break;


        case 'type':
        case 'explanation':
        case 'explanation_parse_mode':
          if (typeof value !== 'string')
            throw new TypeError(`Ожидался string для ${key}, получен ${typeof value}.`);

          if (key === 'type')
            value = value === 'quiz' ? value : 'regular';

          if (key === 'explanation')
            if (value.length < 0 || value.length > 200)
              throw new TypeError(`Невалидное значение для ${key}, получен ${value}.`);
          break;


        case 'correct_option_id':
        case 'open_period':
        case 'close_date':
        case 'reply_to_message_id':
        case 'message_thread_id':
          if (!(typeof value === 'number' && Number.isInteger(value)))
            throw new TypeError(`Ожидался number для ${key}, получен ${typeof value}.`);

          if (key === 'correct_option_id')
            if (value < 0 || value > answers.length)
              throw new TypeError(`Невалидное значение для ${key}, получен ${value}.`);

          if (key === 'open_period')
            if (value < 5 || value > 600)
              throw new TypeError(`Невалидное значение для ${key}, получен ${value}.`);

          if (key === 'close_date')
            if (value < 5 || value > 600)
              throw new TypeError(`Невалидное значение для ${key}, получен ${value}.`);
          break;


        case 'explanation_entities':
        case 'reply_markup':
          if (typeof value !== 'object')
            throw new TypeError(`Ожидался object для ${key}, получен ${typeof value}.`);
          break;


        default:
          // Неизвестный параметр
          throw new Error(`Неизвестный параметр: ${key}.`);
      }

      data[key] = value;
    });

    // Отправка запроса
    return TelegramApp.newMessage(this._fetch('sendPoll', data));
  }



  sendDice() {
    throw new Error(`The method is under development!`);
  }



  sendChatAction() {
    throw new Error(`The method is under development!`);
  }



  setMessageReaction() {
    throw new Error(`The method is under development!`);
  }



  getUserProfilePhotos() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Возвращает основную информацию о файле и подготавливает его к загрузке.
   * @param {string} fileId Идентификатор файла, о котором нужно получить информацию.
   * @return {File}
   */
  getFile(fileId) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.getFile.`);

    if (!(typeof fileId === 'string' && String(fileId).trim().length))
      throw new TypeError(`Параметры (${typeof fileId}) не соответствуют сигнатуре метода ${this.constructor.name}.getFile.`);

    const data = {};

    data.file_id = String(fileId).trim();

    return TelegramApp.newFile(this._fetch('getFile', data));
  }



  banChatMember() {
    throw new Error(`The method is under development!`);
  }



  unbanChatMember() {
    throw new Error(`The method is under development!`);
  }



  restrictChatMember() {
    throw new Error(`The method is under development!`);
  }



  promoteChatMember() {
    throw new Error(`The method is under development!`);
  }



  setChatAdministratorCustomTitle() {
    throw new Error(`The method is under development!`);
  }



  banChatSenderChat() {
    throw new Error(`The method is under development!`);
  }



  unbanChatSenderChat() {
    throw new Error(`The method is under development!`);
  }



  setChatPermissions() {
    throw new Error(`The method is under development!`);
  }



  exportChatInviteLink() {
    throw new Error(`The method is under development!`);
  }



  createChatInviteLink() {
    throw new Error(`The method is under development!`);
  }



  editChatInviteLink() {
    throw new Error(`The method is under development!`);
  }



  createChatSubscriptionInviteLink() {
    throw new Error(`The method is under development!`);
  }



  editChatSubscriptionInviteLink() {
    throw new Error(`The method is under development!`);
  }



  revokeChatInviteLink() {
    throw new Error(`The method is under development!`);
  }



  approveChatJoinRequest() {
    throw new Error(`The method is under development!`);
  }



  declineChatJoinRequest() {
    throw new Error(`The method is under development!`);
  }



  setChatPhoto() {
    throw new Error(`The method is under development!`);
  }



  deleteChatPhoto() {
    throw new Error(`The method is under development!`);
  }



  setChatTitle() {
    throw new Error(`The method is under development!`);
  }



  setChatDescription() {
    throw new Error(`The method is under development!`);
  }



  pinChatMessage() {
    throw new Error(`The method is under development!`);
  }



  unpinChatMessage() {
    throw new Error(`The method is under development!`);
  }



  unpinAllChatMessages() {
    throw new Error(`The method is under development!`);
  }



  leaveChat() {
    throw new Error(`The method is under development!`);
  }



  getChat() {
    throw new Error(`The method is under development!`);
  }



  getChatAdministrators() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Возвращает количество участников в чате.
   * @param {(string|Integer)} chatId Уникальный идентификатор целевого чата или канала.
   * @return {Integer}
   */
  getChatMemberCount(chatId) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.getChatMemberCount.`);

    const data = {};

    if (!(['string', 'number'].includes(typeof chatId) && String(chatId).trim().length))
      throw new TypeError(`Параметры (${typeof chatId}) не соответствуют сигнатуре метода ${this.constructor.name}.getChatMemberCount.`);

    data.chat_id = String(chatId).trim();

    return this._fetch('getChatMemberCount', data);
  }



  getChatMember() {
    throw new Error(`The method is under development!`);
  }



  setChatStickerSet() {
    throw new Error(`The method is under development!`);
  }



  deleteChatStickerSet() {
    throw new Error(`The method is under development!`);
  }



  deleteChatStickerSet() {
    throw new Error(`The method is under development!`);
  }



  getForumTopicIconStickers() {
    throw new Error(`The method is under development!`);
  }



  createForumTopic() {
    throw new Error(`The method is under development!`);
  }



  editForumTopic() {
    throw new Error(`The method is under development!`);
  }



  closeForumTopic() {
    throw new Error(`The method is under development!`);
  }



  reopenForumTopic() {
    throw new Error(`The method is under development!`);
  }



  deleteForumTopic() {
    throw new Error(`The method is under development!`);
  }



  unpinAllForumTopicMessages() {
    throw new Error(`The method is under development!`);
  }



  editGeneralForumTopic() {
    throw new Error(`The method is under development!`);
  }



  closeGeneralForumTopic() {
    throw new Error(`The method is under development!`);
  }



  reopenGeneralForumTopic() {
    throw new Error(`The method is under development!`);
  }



  hideGeneralForumTopic() {
    throw new Error(`The method is under development!`);
  }



  unhideGeneralForumTopic() {
    throw new Error(`The method is under development!`);
  }


  unpinAllGeneralForumTopicMessages() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Отправляет ответ на запросы обратного вызова, отправленные со встроенных клавиатур.
   * @param {string} callbackQueryId Уникальный идентификатор запроса, на который нужно ответить.
   * @param {Object} [options={}] Опциональные параметры.
   * @return {boolean} В случае успеха возвращается `true`.
   */
  answerCallbackQuery(callbackQueryId, options = {}) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.answerCallbackQuery.`);

    const data = {};

    if (!(typeof callbackQueryId === 'string' && String(callbackQueryId).trim().length))
      throw new TypeError(`Параметры (${typeof callbackQueryId}) не соответствуют сигнатуре метода ${this.constructor.name}.answerCallbackQuery.`);

    data.callbackQueryId = callbackQueryId;

    if (arguments[1]) {
      if (!Object.isObject(options))
        throw new TypeError(`Параметры (${typeof callbackQueryId}, ${typeof options}) не соответствуют сигнатуре метода ${this.constructor.name}.answerCallbackQuery.`);

      if (['string', 'number'].includes(typeof options.text) && String(options.text).trim().length)
        data.text = String(options.text).trim();

      if (typeof options.show_alert === 'boolean')
        data.show_alert = options.show_alert;

      if (typeof options.url === 'string' && String(options.url).trim().length)
        data.url = String(options.url).trim();

      if (typeof options.cache_time === 'number' && options.cache_time >= 0)
        data.cache_time = options.cache_time;
    }

    return this._fetch('answerCallbackQuery', data);
  }


  getUserChatBoosts() {
    throw new Error(`The method is under development!`);
  }



  getBusinessConnection() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Изменяет список команд бота.
   * @param {BotCommand[]} commands Список команд бота, в формате JSON, который должен быть установлен как список команд бота. Можно указать не более 100 команд.
   * @param {Object} [options={}] Опциональные параметры.
   * @return {boolean}
   */
  setMyCommands(commands, options = {}) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.setMyCommands.`);

    const data = {};

    if (!(Array.isArray(commands) && commands.length))
      throw new TypeError(`Параметры (${typeof commands}) не соответствуют сигнатуре метода ${this.constructor.name}.setMyCommands.`);

    data.commands = commands;

    if (arguments[1]) {
      if (!Object.isObject(options))
        throw new TypeError(`Параметры (${typeof commands}, ${typeof options}) не соответствуют сигнатуре метода ${this.constructor.name}.setMyCommands.`);

      if (Object.isObject(options.scope))
        data.scope = options.scope;

      if (typeof options.language_code === 'string')
        data.language_code = options.language_code;
    }

    return this._fetch('setMyCommands', data);
  }



  /**
   * Удаляет список команд бота для заданной области и языка пользователя.
   * @param {Object} [options={}] Опциональные параметры.
   * @return {boolean} `true` в случае успеха.
   */
  deleteMyCommands(options = {}) {
    const data = {};

    if (arguments[0]) {
      if (!Object.isObject(options))
        throw new TypeError(`Параметры (${typeof commands}, ${typeof options}) не соответствуют сигнатуре метода ${this.constructor.name}.setMyCommands.`);

      if (Object.isObject(options.scope))
        data.scope = options.scope;

      if (typeof options.language_code === 'string')
        data.language_code = options.language_code;
    }

    return this._fetch('deleteMyCommands', data);
  }



  /**
   * Возвращает текущий список команд бота для заданной области и языка пользователя.
   * Если команды не заданы, возвращается пустой список.
   * @param {Object} [options={}] Опциональные параметры.
   * @return {BotCommand}
   */
  getMyCommands(options = {}) {
    const data = {};

    if (arguments[0]) {
      if (!Object.isObject(options))
        throw new TypeError(`Параметры (${typeof commands}, ${typeof options}) не соответствуют сигнатуре метода ${this.constructor.name}.setMyCommands.`);

      if (Object.isObject(options.scope))
        data.scope = options.scope;

      if (typeof options.language_code === 'string')
        data.language_code = options.language_code;
    }

    return TelegramApp.newBotCommand(this._fetch('getMyCommands', data));
  }



  setMyName() {
    throw new Error(`The method is under development!`);
  }



  getMyName() {
    throw new Error(`The method is under development!`);
  }



  getMyName() {
    throw new Error(`The method is under development!`);
  }



  setMyDescription() {
    throw new Error(`The method is under development!`);
  }



  getMyDescription() {
    throw new Error(`The method is under development!`);
  }



  setMyShortDescription() {
    throw new Error(`The method is under development!`);
  }



  getMyShortDescription() {
    throw new Error(`The method is under development!`);
  }



  setChatMenuButton() {
    throw new Error(`The method is under development!`);
  }



  getChatMenuButton() {
    throw new Error(`The method is under development!`);
  }



  setMyDefaultAdministratorRights() {
    throw new Error(`The method is under development!`);
  }



  getMyDefaultAdministratorRights() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Редактирует текстовые и игровые сообщения.
   * @param {string} text Новый текст сообщения.
   * @param {Object} [options={}] Опциональные параметры.
   * @return {boolean} В случае успеха, если отредактированное сообщение не является встроенным, возвращается отредактированное Сообщение, в противном случае возвращается `true`.
   */
  editMessageText(text, options = {}) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.editMessageText.`);

    const data = {};

    if (!(['string', 'number'].includes(typeof text) && String(text).trim().length))
      throw new TypeError(`Параметры (${typeof text}) не соответствуют сигнатуре метода ${this.constructor.name}.editMessageText.`);

    data.text = String(text)
      .trim();

    if (arguments[1]) {
      if (!Object.isObject(options))
        throw new TypeError(`Параметры (${typeof media}, ${typeof options}) не соответствуют сигнатуре метода ${this.constructor.name}.editMessageText.`);

      if (['string', 'number'].includes(typeof options.chat_id) && String(options.chat_id).trim().length)
        data.chat_id = String(options.chat_id).trim();

      if (typeof options.message_id === 'number')
        data.message_id = String(options.message_id).trim();

      if (typeof options.inline_message_id === 'string' && String(options.inline_message_id).trim().length)
        data.inline_message_id = String(options.inline_message_id).trim();

      if ((item => typeof item === 'string' && item.trim().length)(options.parse_mode))
        data.parse_mode = options.parse_mode;

      if (Array.isArray(options.entities))
        data.entities = options.entities;

      if (typeof options.disable_web_page_preview === 'boolean')
        data.disable_web_page_preview = options.disable_web_page_preview;

      if (Object.isObject(options.reply_markup))
        data.reply_markup = options.reply_markup;
    }

    return this._fetch('editMessageText', data);
  }



  editMessageCaption() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Редактирование анимации, аудио, документов, фотографий или видео сообщений.
   * @param {InputMedia} media JSON-объект для нового мультимедийного содержимого сообщения.
   * @param {Object} [options={}] Опциональные параметры.
   * @return {boolean}
   */
  editMessageMedia(media, options = {}) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.editMessageMedia.`);

    const data = {};

    if (!Object.isObject(media))
      throw new TypeError(`Параметры (${typeof media}) не соответствуют сигнатуре метода ${this.constructor.name}.editMessageMedia.`);

    data.media = media;

    if (arguments[1]) {
      if (!Object.isObject(options))
        throw new TypeError(`Параметры (${typeof media}, ${typeof options}) не соответствуют сигнатуре метода ${this.constructor.name}.editMessageMedia.`);

      if (['string', 'number'].includes(typeof options.chat_id) && String(options.chat_id).trim().length)
        data.chat_id = String(options.chat_id).trim();

      if (typeof options.message_id === 'number')
        data.message_id = String(options.message_id).trim();

      if (typeof options.inline_message_id === 'string' && String(options.inline_message_id).trim().length)
        data.inline_message_id = String(options.inline_message_id).trim();

      if (Object.isObject(options.reply_markup))
        data.reply_markup = options.reply_markup;
    }

    return this._fetch('editMessageMedia', data);
  }



  editMessageLiveLocation() {
    throw new Error(`The method is under development!`);
  }



  stopMessageLiveLocation() {
    throw new Error(`The method is under development!`);
  }



  editMessageReplyMarkup() {
    throw new Error(`The method is under development!`);
  }



  stopPoll() {
    throw new Error(`The method is under development!`);
  }



  stopPoll() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Удаляет сообщение, включая служебные.
   * @param {(string|Integer)} chatId Уникальный идентификатор целевого чата или имя пользователя целевого канала.
   * @param {(string|Integer)} messageId Идентификатор удаляемого сообщения.
   * @return {boolean} `true` в случае успеха.
   */
  deleteMessage(chatId, messageId) {
    if (!arguments.length)
      throw new Error(`Параметры () не соответствуют сигнатуре метода ${this.constructor.name}.deleteMessage.`);

    const data = {};

    if (!['string', 'number'].includes(typeof chatId))
      throw new TypeError(`Параметры (${typeof chatId}) не соответствуют сигнатуре метода ${this.constructor.name}.deleteMessage.`);

    data.chat_id = String(chatId).trim();

    if (!data.chat_id.length)
      throw new Error(`Параметр chat_id невалиден.`);

    if (!['string', 'number'].includes(typeof messageId))
      throw new TypeError(`Параметры (${typeof chatId}, ${typeof messageId}) не соответствуют сигнатуре метода ${this.constructor.name}.deleteMessage.`);

    data.message_id = String(messageId).trim();

    if (!data.message_id.length)
      throw new Error(`Параметр message_id невалиден.`);

    return this._fetch('deleteMessage', data);
  }



  deleteMessages() {
    throw new Error(`The method is under development!`);
  }



  sendSticker() {
    throw new Error(`The method is under development!`);
  }



  getStickerSet() {
    throw new Error(`The method is under development!`);
  }



  uploadStickerFile() {
    throw new Error(`The method is under development!`);
  }



  createNewStickerSet() {
    throw new Error(`The method is under development!`);
  }



  addStickerToSet() {
    throw new Error(`The method is under development!`);
  }



  setStickerPositionInSet() {
    throw new Error(`The method is under development!`);
  }



  deleteStickerFromSet() {
    throw new Error(`The method is under development!`);
  }



  replaceStickerInSet() {
    throw new Error(`The method is under development!`);
  }



  setStickerEmojiList() {
    throw new Error(`The method is under development!`);
  }



  setStickerKeywords() {
    throw new Error(`The method is under development!`);
  }



  setStickerMaskPosition() {
    throw new Error(`The method is under development!`);
  }



  setStickerSetTitle() {
    throw new Error(`The method is under development!`);
  }



  setStickerSetThumbnail() {
    throw new Error(`The method is under development!`);
  }



  setCustomEmojiStickerSetThumbnail() {
    throw new Error(`The method is under development!`);
  }



  deleteStickerSet() {
    throw new Error(`The method is under development!`);
  }



  sendSticker() {
    throw new Error(`The method is under development!`);
  }



  getStickerSet() {
    throw new Error(`The method is under development!`);
  }



  getCustomEmojiStickers() {
    throw new Error(`The method is under development!`);
  }



  uploadStickerFile() {
    throw new Error(`The method is under development!`);
  }



  createNewStickerSet() {
    throw new Error(`The method is under development!`);
  }



  addStickerToSet() {
    throw new Error(`The method is under development!`);
  }



  setStickerPositionInSet() {
    throw new Error(`The method is under development!`);
  }



  deleteStickerFromSet() {
    throw new Error(`The method is under development!`);
  }



  replaceStickerInSet() {
    throw new Error(`The method is under development!`);
  }



  setStickerEmojiList() {
    throw new Error(`The method is under development!`);
  }



  setStickerKeywords() {
    throw new Error(`The method is under development!`);
  }



  setStickerMaskPosition() {
    throw new Error(`The method is under development!`);
  }



  setStickerSetTitle() {
    throw new Error(`The method is under development!`);
  }



  setStickerSetThumbnail() {
    throw new Error(`The method is under development!`);
  }



  setCustomEmojiStickerSetThumbnail() {
    throw new Error(`The method is under development!`);
  }



  deleteStickerSet() {
    throw new Error(`The method is under development!`);
  }



  answerInlineQuery() {
    throw new Error(`The method is under development!`);
  }



  answerWebAppQuery() {
    throw new Error(`The method is under development!`);
  }



  sendInvoice() {
    throw new Error(`The method is under development!`);
  }



  createInvoiceLink() {
    throw new Error(`The method is under development!`);
  }



  answerShippingQuery() {
    throw new Error(`The method is under development!`);
  }



  answerPreCheckoutQuery() {
    throw new Error(`The method is under development!`);
  }



  getStarTransactions() {
    throw new Error(`The method is under development!`);
  }



  refundStarPayment() {
    throw new Error(`The method is under development!`);
  }



  setPassportDataErrors() {
    throw new Error(`The method is under development!`);
  }



  sendGame() {
    throw new Error(`The method is under development!`);
  }



  setGameScore() {
    throw new Error(`The method is under development!`);
  }



  getGameHighScores() {
    throw new Error(`The method is under development!`);
  }



  /**
   * Вызывается при преобразовании объекта в соответствующее примитивное значение.
   * @param {string} hint Строковый аргумент, который передаёт желаемый тип примитива: `string`, `number` или `default`.
   * @return {string}
   */
  [Symbol.toPrimitive](hint) {
    if (hint !== 'string') {
      return null;
    }

    return this.constructor.name;
  }



  /**
   * Возвращает значение текущего объекта.
   * @return {string}
   */
  valueOf() {
    return (this[Symbol.toPrimitive] ? this[Symbol.toPrimitive]() : this.constructor.name);
  }



  /**
   * Геттер для получения строки, представляющей тег объекта.
   * @return {string} Имя класса текущего объекта, используемое в `Object.prototype.toString`.
   */
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }



  /**
   * Возвращает строку, представляющую объект.
   * @return {string}
   */
  toString() {
    return (this[Symbol.toPrimitive] ? this[Symbol.toPrimitive]('string') : this.constructor.name);
  }

};





/**
 * @class               _ClassTemplate
 * @memberof            _ClassTemplate
 * @version             1.1.0
 * @since               1.1.0
 * @private
 */
TelegramApp._ClassTemplate = class _ClassTemplate {

  /**
   * @param {*} data 
   */
  constructor(data = {}) {
    for (const key in data) {
      this[key] = data[key];
    }
  }



  /**
   * Вызывается при преобразовании объекта в соответствующее примитивное значение.
   * @param {string} hint Строковый аргумент, который передаёт желаемый тип примитива: `string`, `number` или `default`.
   * @return {string}
   */
  [Symbol.toPrimitive](hint) {
    if (hint !== 'string') {
      return null;
    }

    return this.constructor.name;
  }



  /**
   * Возвращает значение текущего объекта.
   * @return {string}
   */
  valueOf() {
    return (this[Symbol.toPrimitive] ? this[Symbol.toPrimitive]() : this.constructor.name);
  }



  /**
   * Геттер для получения строки, представляющей тег объекта.
   * @return {string} Имя класса текущего объекта, используемое в `Object.prototype.toString`.
   */
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }



  /**
   * Возвращает строку, представляющую объект.
   * @return {string}
   */
  toString() {
    return (this[Symbol.toPrimitive] ? this[Symbol.toPrimitive]('string') : this.constructor.name);
  }

};





/**
 * @class               Update
 * @memberof            TelegramApp
 * @version             1.1.0
 * @since               1.1.0
 * @see                 https://core.telegram.org/bots/api#update
 */
TelegramApp.Update = class Update extends TelegramApp._ClassTemplate { };





/**
 * @class               WebhookInfo
 * @memberof            TelegramApp
 * @version             1.1.0
 * @since               1.1.0
 * @see                 https://core.telegram.org/bots/api#webhookinfo
 */
TelegramApp.WebhookInfo = class WebhookInfo extends TelegramApp._ClassTemplate { };





/**
 * @class               User
 * @memberof            TelegramApp
 * @version             1.1.0
 * @since               1.1.0
 * @see                 https://core.telegram.org/bots/api#user
 */
TelegramApp.User = class User extends TelegramApp._ClassTemplate { };





/**
 * @class               Chat
 * @memberof            TelegramApp
 * @version             1.1.0
 * @since               1.1.0
 * @see                 https://core.telegram.org/bots/api#user
 */
TelegramApp.Chat = class Chat extends TelegramApp._ClassTemplate { };





/**
 * @class               ChatFullInfo
 * @memberof            TelegramApp
 * @version             1.1.0
 * @since               1.1.0
 * @see                 https://core.telegram.org/bots/api#chatfullinfo
 */
TelegramApp.ChatFullInfo = class ChatFullInfo extends TelegramApp._ClassTemplate { };





/**
 * @class               Message
 * @memberof            TelegramApp
 * @version             1.1.0
 * @since               1.1.0
 * @see                 https://core.telegram.org/bots/api#message
 */
TelegramApp.Message = class Message extends TelegramApp._ClassTemplate { };





/**
 * @class               MessageId
 * @memberof            TelegramApp
 * @version             1.1.0
 * @since               1.1.0
 * @see                 https://core.telegram.org/bots/api#messageid
 */
TelegramApp.MessageId = class MessageId extends TelegramApp._ClassTemplate { };





// ...





/**
 * @class               File
 * @memberof            TelegramApp
 * @version             1.1.0
 * @since               1.1.0
 * @see                 https://core.telegram.org/bots/api#file
 */
TelegramApp.File = class File extends TelegramApp._ClassTemplate { };





// ...





/**
 * @class               BotCommand
 * @memberof            TelegramApp
 * @version             1.1.0
 * @since               1.1.0
 * @see                 https://core.telegram.org/bots/api#botcommand
 */
TelegramApp.BotCommand = class BotCommand extends TelegramApp._ClassTemplate { };





// ...





/**
 * Перечисление регулярных выражений.
 * @enum                {RegExp} 
 * @memberof            TelegramApp.Telegram
 * @version             1.0.0
 * @since               1.0.0
 * @readonly
 */
TelegramApp.Telegram.RegExp = {

  /**
   * @type                {RegExp}
   */
  TOKEN: /^\d+:[^:\s]+$/i

};
