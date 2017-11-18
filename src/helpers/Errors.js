export default class Errors {

  /**
   * Create a new Errors instance.
   */
  constructor() {
      this.errors = {};
  }

  /**
   * Determine if an errors exists for the given field.
   *
   * @param {string} field
   */
  has(field) {
    return Object.values(this.errors).find(error => error.field == field) !== undefined;
  }

  /**
   * Determine if we have any errors.
   */
  any() {
    return Object.keys(this.errors).length > 0;
  }

  /**
   * Retrieve the error message for a field.
   *
   * @param {string} field
   */
  get(field) {
    if (this.errors.length) {      
      return Object.values(this.errors).find(error => error.field == field);
    }
  }

  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  record(errors) {
    this.errors = errors;
  }

  /**
   * Clear all error fields.
   */
  clear() {
    this.errors = {};
  }
}