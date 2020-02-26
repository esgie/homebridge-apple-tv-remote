const inherits = require("util").inherits;

let Characteristic = {};

/**
 * Registers now playing charactersitics for the AppleTV plugin.
 * @param api The API instance of api (may be null on older homebridge versions).
 */
module.exports = function(api) {
  let Characteristic = api.hap.Characteristic;

  // The currently playing media type
  Characteristic.Type = function() {
    Characteristic.call(this, "Type", Characteristic.Type.UUID);

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  Characteristic.Type.UUID = "cb07b525-084f-4e40-83b0-76013d9c6436";

  inherits(Characteristic.Title, Characteristic);

  // The currently playing media title
  Characteristic.Title = function() {
    Characteristic.call(this, "Title", Characteristic.Title.UUID);

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  Characteristic.Title.UUID = "b6e8eb16-9f0e-4a15-902b-f415c0ac5570";

  inherits(Characteristic.Title, Characteristic);

  // The currently playing media artist
  Characteristic.Artist = function() {
    Characteristic.call(this, "Artist", Characteristic.Artist.UUID);

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  Characteristic.Artist.UUID = "5c9506e7-d60c-4fe0-8614-1677d74867c8";

  inherits(Characteristic.Artist, Characteristic);

  // The currently playing media album
  Characteristic.Album = function() {
    Characteristic.call(this, "Album", Characteristic.Album.UUID);

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  Characteristic.Album.UUID = "ffcdb20b-bf68-4018-a0be-8bac52bf4fdd";

  inherits(Characteristic.Album, Characteristic);

  // The currently active application name
  Characteristic.Application = function() {
    Characteristic.call(this, "Application", Characteristic.Application.UUID);

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  Characteristic.Application.UUID = "3b29ffb8-debf-4512-9572-78fd43294263";

  inherits(Characteristic.Application, Characteristic);

  // The currently active application bundle identifier
  Characteristic.ApplicationBundle = function() {
    Characteristic.call(this, "ApplicationBundle", Characteristic.ApplicationBundle.UUID);

    this.setProps({
      format: Characteristic.Formats.STRING,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  Characteristic.ApplicationBundle.UUID = "75448494-3c05-4962-acaf-29dcd7baca66";

  inherits(Characteristic.ApplicationBundle, Characteristic);

  // The currently playing media elapsed time
  Characteristic.Elapsed = function() {
    Characteristic.call(this, "Elapsed", Characteristic.Elapsed.UUID);

    this.setProps({
      format: Characteristic.Formats.INT,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  Characteristic.Elapsed.UUID = "51d56c6c-131b-4b92-bf22-9bcc7e66b877";

  inherits(Characteristic.Elapsed, Characteristic);

  // The currently playing media duration
  Characteristic.Duration = function() {
    Characteristic.call(this, "Duration", Characteristic.Duration.UUID);

    this.setProps({
      format: Characteristic.Formats.INT,
      perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
    });

    this.value = this.getDefaultValue();
  };

  Characteristic.Duration.UUID = "af4bcf1f-bbe6-483b-969c-9149926e3328";

  inherits(Characteristic.Duration, Characteristic);

  return Characteristic;
};
