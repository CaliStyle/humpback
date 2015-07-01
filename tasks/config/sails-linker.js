/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {
	var util = require('util');

	grunt.config.set('sails-linker', {
		devJs: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').jsFilesToInject,
				'views/**/*.html': require('../pipeline').jsFilesToInject,
				'views/**/*.ejs': require('../pipeline').jsFilesToInject
			}
		},

		devJsRelative: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': require('../pipeline').jsFilesToInject,
				'views/**/*.html': require('../pipeline').jsFilesToInject,
				'views/**/*.ejs': require('../pipeline').jsFilesToInject
			}
		},

		prodJs: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/**/*.html': ['.tmp/public/min/production.min.js'],
				'views/**/*.html': ['.tmp/public/min/production.min.js'],
				'views/**/*.ejs': ['.tmp/public/min/production.min.js']
			}
		},

		prodJsRelative: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/**/*.html': ['.tmp/public/min/production.min.js'],
				'views/**/*.html': ['.tmp/public/min/production.min.js'],
				'views/**/*.ejs': ['.tmp/public/min/production.min.js']
			}
		},

		devStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.ejs': require('../pipeline').cssFilesToInject
			}
		},

		devStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.html': require('../pipeline').cssFilesToInject,
				'views/**/*.ejs': require('../pipeline').cssFilesToInject
			}
		},

		prodStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/min/production.min.css'],
				'views/**/*.html': ['.tmp/public/min/production.min.css'],
				'views/**/*.ejs': ['.tmp/public/min/production.min.css']
			}
		},

		prodStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/min/production.min.css'],
				'views/**/*.html': ['.tmp/public/min/production.min.css'],
				'views/**/*.ejs': ['.tmp/public/min/production.min.css']
			}
		},

		// Bring in JST template object
		devTpl: {
			options: {
				startTag: '<!--TEMPLATES-->',
				endTag: '<!--TEMPLATES END-->',
				fileTmpl: '<script type="text/javascript" src="%s"></script>',
				appRoot: '.tmp/public'
			},
			files: {
				'.tmp/public/index.html': ['.tmp/public/jst.js'],
				'views/**/*.html': ['.tmp/public/jst.js'],
				'views/**/*.ejs': ['.tmp/public/jst.js']
			}
		},

		devJsJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': require('../pipeline').jsFilesToInject
			}
		},

		devJsRelativeJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/**/*.jade': require('../pipeline').jsFilesToInject
			}
		},

		prodJsJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/min/production.min.js']
			}
		},

		prodJsRelativeJade: {
			options: {
				startTag: '// SCRIPTS',
				endTag: '// SCRIPTS END',
				fileTmpl: 'script(src="%s")',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/**/*.jade': ['.tmp/public/min/production.min.js']
			}
		},

		devStylesJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public'
			},

			files: {
				'views/**/*.jade': require('../pipeline').cssFilesToInject
			}
		},

		devStylesRelativeJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public',
				relative: true
			},

			files: {
				'views/**/*.jade': require('../pipeline').cssFilesToInject
			}
		},

		prodStylesJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/min/production.min.css']
			}
		},

		prodStylesRelativeJade: {
			options: {
				startTag: '// STYLES',
				endTag: '// STYLES END',
				fileTmpl: 'link(rel="stylesheet", href="%s")',
				appRoot: '.tmp/public',
				relative: true
			},
			files: {
				'views/**/*.jade': ['.tmp/public/min/production.min.css']
			}
		},

		// Bring in JST template object
		devTplJade: {
			options: {
				startTag: '// TEMPLATES',
				endTag: '// TEMPLATES END',
				fileTmpl: 'script(type="text/javascript", src="%s")',
				appRoot: '.tmp/public'
			},
			files: {
				'views/**/*.jade': ['.tmp/public/jst.js']
			}
		},

		// Inject Humpback Controllers
		humpbackControllers: {
			options: {
		        startTag: '/* PROJECT CONTROLLERS */',
		        endTag: '/* PROJECT CONTROLLERS END */',
		        fileRef: function (filepath) {
		            var tmpl = "'%s',";
		            var filename = filepath.substr(filepath.lastIndexOf('/') + 1);
		            filename  = filename.replace(/\.[^/.]+$/, "").toLowerCase();
		            filename = filename.replace('controller', ".controller");
		            return util.format(tmpl, filename);
		       	},
		        appRoot: '/'
		    },
		    files: {
		        'assets/app/controllers/index.js': ['assets/app/controllers/*Controller.js']
		    }
		},
		humpbackModels: {
			options: {
		        startTag: '/* PROJECT MODELS */',
		        endTag: '/* PROJECT MODELS END */',
		        fileRef: function (filepath) {
		            var tmpl = "'%s.model',";
		            var filename = filepath.substr(filepath.lastIndexOf('/') + 1);
		            filename  = filename.replace(/\.[^/.]+$/, "").toLowerCase();
		            return util.format(tmpl, filename);
		       	},
		        appRoot: '/'
		    },
		    files: {
		        'assets/app/models/index.js': ['assets/app/models/*.js', '!assets/app/models/index.js']
		    }
		},
		humpbackHooks: {
			options: {
		        startTag: '/* PROJECT HOOKS */',
		        endTag: '/* PROJECT MODELS END */',
		        fileRef: function (filepath) {
		            var tmpl = "'%s.hook',";
		            var filename = filepath.substr(filepath.lastIndexOf('/') + 1);
		            filename  = filename.replace(/\.[^/.]+$/, "").toLowerCase();
		            return util.format(tmpl, filename);
		       	},
		        appRoot: '/'
		    },
		    files: {
		        'assets/app/hooks/index.js': ['assets/app/hooks/*.js', '!assets/app/hooks/index.js']
		    }
		},
		humpbackPolicies: {
			options: {
		        startTag: '/* PROJECT POLICIES */',
		        endTag: '/* PROJECT POLICIES END */',
		        fileRef: function (filepath) {
		            var tmpl = "'%s.policy',";
		            var filename = filepath.substr(filepath.lastIndexOf('/') + 1);
		            filename  = filename.replace(/\.[^/.]+$/, "").toLowerCase();
		            return util.format(tmpl, filename);
		       	},
		        appRoot: '/'
		    },
		    files: {
		        'assets/app/policies/index.js': ['assets/app/policies/*.js', '!assets/app/policies/index.js']
		    }
		},
		humpbackViews: {
			options: {
		        startTag: '/* PROJECT VIEWS */',
		        endTag: '/* PROJECT VIEWS END */',
		        fileRef: function (filepath) {
		            var tmpl = "'%s.view',";
		            var filename = filepath.substr(filepath.lastIndexOf('/') + 1);
		            filename  = filename.replace(/\.[^/.]+$/, "").toLowerCase();
		            return util.format(tmpl, filename);
		       	},
		        appRoot: '/'
		    },
		    files: {
		        'assets/app/views/index.js': ['assets/app/views/*.js', '!assets/app/views/index.js']
		    }
		},
		humpbackDirectives: {
			options: {
		        startTag: '/* PROJECT DIRECTIVES */',
		        endTag: '/* PROJECT DIRECTIVES END */',
		        fileRef: function (filepath) {
		            var tmpl = "'%s.view',";
		            var filename = filepath.substr(filepath.lastIndexOf('/') + 1);
		            filename  = filename.replace(/\.[^/.]+$/, "").toLowerCase();
		            return util.format(tmpl, filename);
		       	},
		        appRoot: '/'
		    },
		    files: {
		        'assets/app/directives/index.js': ['assets/app/directives/*.js', '!assets/app/directives/index.js']
		    }
		},
		humpbackFilters: {
			options: {
		        startTag: '/* PROJECT FILTERS */',
		        endTag: '/* PROJECT FITLERS END */',
		        fileRef: function (filepath) {
		            var tmpl = "'%s.view',";
		            var filename = filepath.substr(filepath.lastIndexOf('/') + 1);
		            filename  = filename.replace(/\.[^/.]+$/, "").toLowerCase();
		            return util.format(tmpl, filename);
		       	},
		        appRoot: '/'
		    },
		    files: {
		        'assets/app/filters/index.js': ['assets/app/filters/*.js', '!assets/app/filters/index.js']
		    }
		}
	});

	grunt.loadNpmTasks('grunt-sails-linker');
};
