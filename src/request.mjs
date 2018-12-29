import request from 'request-promise-native';
import cheerio from 'cheerio';

/**
 * queue request api one by one.
 */
export default class Request {
  /**
     *
     * @param {String} baseURL remote base.
     */
  constructor(baseURL) {
    this.rq = request.defaults({
      baseUrl: baseURL,
    });

    this.queue = [];
    this.pending = false;
  }

  /**
     *
     * @param {Object} options url, header...
     * @return {Promise}
     */
  send(options) {
    return new Promise((resolve, reject) => {
      this.queue.push([options, resolve, reject]);

      this.start();
    });
  }

  /**
   * start
   */
  async start() {
    if (this.pending || !this.queue.length) return;

    const [options, res, rej] = this.queue.shift();
    this.pending = true;

    try {
      console.log('[request start] ', options.url || options.uri);
      const body = await this.rq(options);
      const $ = cheerio.load(body);
      console.log('[request and cheer finish] ', options.url || options.uri);

      res($);
    } catch (e) {
      rej(e);
    } finally {
      this.pending = false;
      this.start();
    }
  }
}
