/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears('sample','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });

    controller.hears('Tejas','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'Special message for Tejas');
    });

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Echo: ${ message.text }`);
    });

}
