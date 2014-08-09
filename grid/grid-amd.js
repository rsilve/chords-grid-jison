

define([], function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"main":3,"NEWLINE":4,"lines":5,"line":6,"EOF":7,"measures":8,"BAR":9,"measure_repeat":10,"REPEAT":11,"measure_part":12,"PART":13,"LEFT_PARAN":14,"NOTE":15,"RIGHT_PARAN":16,"measure":17,"EMPTY":18,"SAME":19,"chords":20,"chord":21,"PLACEHOLDER":22,"chordname":23,"MODIFIER":24,"BASE":25,"$accept":0,"$end":1},
terminals_: {2:"error",4:"NEWLINE",7:"EOF",9:"BAR",11:"REPEAT",13:"PART",14:"LEFT_PARAN",15:"NOTE",16:"RIGHT_PARAN",18:"EMPTY",19:"SAME",22:"PLACEHOLDER",24:"MODIFIER",25:"BASE"},
productions_: [0,[3,0],[3,2],[3,1],[5,3],[5,3],[5,2],[6,1],[8,2],[8,3],[8,2],[8,1],[10,2],[10,2],[10,1],[12,5],[12,1],[17,1],[17,1],[17,1],[20,2],[20,1],[21,2],[21,1],[23,5],[23,4],[23,2],[23,4],[23,3],[23,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 3: return $$[$0] 
break;
case 4: $$[$0].unshift($$[$0-2]); this.$ = $$[$0] 
break;
case 5: this.$ = [$$[$0-2]] 
break;
case 6: this.$ = [$$[$0-1]] 
break;
case 8: this.$ = $$[$0] 
break;
case 9: $$[$0].unshift($$[$0-2]); this.$ = $$[$0] 
break;
case 10: this.$ = [$$[$0-1]] 
break;
case 11: this.$ = [$$[$0]] 
break;
case 12: $$[$0].repeatLeft = true; this.$ = $$[$0] 
break;
case 13: $$[$0-1].repeatRight = true; this.$ = $$[$0-1] 
break;
case 15: $$[$0].part = $$[$0-2]; this.$ = $$[$0] 
break;
case 17: this.$ = { empty: true } 
break;
case 18: this.$ = { same: true } 
break;
case 19:
			
			var total = 0;
			$$[$0].chords.forEach(function(c) {
				total += c.duration
			});	
			$$[$0].chords.forEach(function(c) {
				c.duration = c.duration * 4 / total;
			});	
			
			var count = $$[$0].chords.length;
			var duration  = $$[$0].chords[0].duration;
			if (count == 1) {
            	$$[$0].type = 1;
        	}
        	if (count == 2 && duration == 1) {
            	$$[$0].type = 2;
        	}
        	if (count == 2 && duration == 2) {
            	$$[$0].type = 3;
        	}
        	if (count == 2 && duration == 3) {
            	$$[$0].type = 4;
        	}
        	if (count == 3 && duration == 1) {
            	$$[$0].type = 5;
        	}
        	if (count == 3 && duration == 2) {
            	$$[$0].type = 6;
        	}
        	if (count == 4) {
            	$$[$0].type = 7;
        	}
		
break;
case 20: $$[$0].chords.unshift( $$[$0-1] ); this.$ = $$[$0] 
break;
case 21: this.$ = { chords : [$$[$0]] } 
break;
case 22: $$[$0-1].duration ++; this.$ = $$[$0-1] 
break;
case 23: this.$ = { chord : $$[$0], duration: 1} 
break;
case 24: this.$ = $$[$0-4] + $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0] 
break;
case 25: this.$ = $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0] 
break;
case 26: this.$ = $$[$0-1] + $$[$0] 
break;
case 27: this.$ = $$[$0-3] + $$[$0-2] + $$[$0-1] + $$[$0] 
break;
case 28: this.$ = $$[$0-2] + $$[$0-1] + $$[$0] 
break;
case 29: this.$ = $$[$0] 
break;
}
},
table: [{1:[2,1],3:1,4:[1,2],5:3,6:4,8:5,9:[1,6],10:7,11:[1,8],12:9,13:[1,10],15:[1,17],17:11,18:[1,12],19:[1,13],20:14,21:15,23:16},{1:[3]},{1:[2,1],3:18,4:[1,2],5:3,6:4,8:5,9:[1,6],10:7,11:[1,8],12:9,13:[1,10],15:[1,17],17:11,18:[1,12],19:[1,13],20:14,21:15,23:16},{1:[2,3]},{4:[1,19],7:[1,20]},{4:[2,7],7:[2,7]},{8:21,9:[1,6],10:7,11:[1,8],12:9,13:[1,10],15:[1,17],17:11,18:[1,12],19:[1,13],20:14,21:15,23:16},{4:[2,11],7:[2,11],9:[1,22]},{10:23,11:[1,8],12:9,13:[1,10],15:[1,17],17:11,18:[1,12],19:[1,13],20:14,21:15,23:16},{4:[2,14],7:[2,14],9:[2,14],11:[1,24]},{14:[1,25]},{4:[2,16],7:[2,16],9:[2,16],11:[2,16]},{4:[2,17],7:[2,17],9:[2,17],11:[2,17]},{4:[2,18],7:[2,18],9:[2,18],11:[2,18]},{4:[2,19],7:[2,19],9:[2,19],11:[2,19]},{4:[2,21],7:[2,21],9:[2,21],11:[2,21],15:[1,17],20:26,21:15,22:[1,27],23:16},{4:[2,23],7:[2,23],9:[2,23],11:[2,23],15:[2,23],22:[2,23]},{4:[2,29],7:[2,29],9:[2,29],11:[2,29],15:[2,29],22:[2,29],24:[1,28],25:[1,29]},{1:[2,2]},{5:30,6:4,7:[1,31],8:5,9:[1,6],10:7,11:[1,8],12:9,13:[1,10],15:[1,17],17:11,18:[1,12],19:[1,13],20:14,21:15,23:16},{1:[2,6]},{4:[2,8],7:[2,8]},{4:[2,10],7:[2,10],8:32,9:[1,6],10:7,11:[1,8],12:9,13:[1,10],15:[1,17],17:11,18:[1,12],19:[1,13],20:14,21:15,23:16},{4:[2,12],7:[2,12],9:[2,12]},{4:[2,13],7:[2,13],9:[2,13]},{15:[1,33]},{4:[2,20],7:[2,20],9:[2,20],11:[2,20]},{4:[2,22],7:[2,22],9:[2,22],11:[2,22],15:[2,22],22:[2,22]},{4:[2,26],7:[2,26],9:[2,26],11:[2,26],15:[2,26],22:[2,26],25:[1,34]},{15:[1,35]},{1:[2,4]},{1:[2,5]},{4:[2,9],7:[2,9]},{16:[1,36]},{15:[1,37]},{4:[2,28],7:[2,28],9:[2,28],11:[2,28],15:[2,28],22:[2,28],24:[1,38]},{15:[1,17],17:39,18:[1,12],19:[1,13],20:14,21:15,23:16},{4:[2,25],7:[2,25],9:[2,25],11:[2,25],15:[2,25],22:[2,25],24:[1,40]},{4:[2,27],7:[2,27],9:[2,27],11:[2,27],15:[2,27],22:[2,27]},{4:[2,15],7:[2,15],9:[2,15],11:[2,15]},{4:[2,24],7:[2,24],9:[2,24],11:[2,24],15:[2,24],22:[2,24]}],
defaultActions: {3:[2,3],18:[2,2],20:[2,6],30:[2,4],31:[2,5]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 4;
break;
case 2:return 11
break;
case 3:return 22
break;
case 4:return 9
break;
case 5:return 15;
break;
case 6:return 24;
break;
case 7:return 25;
break;
case 8:return 18;
break;
case 9:return 19;
break;
case 10:return 13;
break;
case 11:return 14;
break;
case 12:return 16;
break;
case 13:return 'TEXT';
break;
case 14:return 7;
break;
}
},
rules: [/^(?:[ \t\xA0]+)/,/^(?:\n+)/,/^(?::)/,/^(?:_\b)/,/^(?:\|{1,2})/,/^(?:[ABCDEFG])/,/^(?:[\dmMajdisuab\d\+\-\#°ø]+)/,/^(?:\/)/,/^(?:X\b)/,/^(?:%)/,/^(?:@)/,/^(?:\()/,/^(?:\))/,/^(?:[\w]+)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
return parser;
});