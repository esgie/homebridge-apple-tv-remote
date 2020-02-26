const inherits = require("util").inherits;

let AppleTvCharacteristics = {};

/**
 * Registers now playing charactersitics for the AppleTV plugin.
 * @param api The API instance of api (may be null on older homebridge versions).
 */
module.exports = function(api) {
  let Characteristic = api.hap.Characteristic;

  // The currently playing media title
  AppleTvCharacteristics.Title = function() {
    Characteristic.call(this, "Title", "b6e8eb16-9f0e-4a15-902b-f415c0ac5570");

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  inherits(AppleTvCharacteristics.Title, Characteristic);

  // The currently playing media artist
  AppleTvCharacteristics.Artist = function() {
    Characteristic.call(this, "Artist", "5c9506e7-d60c-4fe0-8614-1677d74867c8");

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  inherits(AppleTvCharacteristics.Artist, Characteristic);

  // The currently playing media album
  AppleTvCharacteristics.Album = function() {
    Characteristic.call(this, "Album", "ffcdb20b-bf68-4018-a0be-8bac52bf4fdd");

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  inherits(AppleTvCharacteristics.Album, Characteristic);

  // The currently active application name
  AppleTvCharacteristics.Application = function() {
    Characteristic.call(this, "Application", "3b29ffb8-debf-4512-9572-78fd43294263");

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  inherits(AppleTvCharacteristics.Application, Characteristic);

  // The currently active application bundle identifier
  AppleTvCharacteristics.ApplicationBundle = function() {
    Characteristic.call(this, "ApplicationBundle", "75448494-3c05-4962-acaf-29dcd7baca66");

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  inherits(AppleTvCharacteristics.ApplicationBundle, Characteristic);

  // The currently playing media elapsed time
  AppleTvCharacteristics.Elapsed = function() {
    Characteristic.call(this, "Elapsed", "51d56c6c-131b-4b92-bf22-9bcc7e66b877");

    this.setProps({
      format: Characteristic.Formats.INT,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  inherits(AppleTvCharacteristics.Elapsed, Characteristic);

  // The currently playing media duration
  AppleTvCharacteristics.Duration = function() {
    Characteristic.call(this, "Duration", "af4bcf1f-bbe6-483b-969c-9149926e3328");

    this.setProps({
      format: Characteristic.Formats.INT,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  inherits(AppleTvCharacteristics.Duration, Characteristic);

  return AppleTvCharacteristics;
};
