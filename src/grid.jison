/* description: Parses chords grid */


/* lexical grammar */
%lex

%%
[ \t\xA0]+              /* skip whitespace */
\n+						return 'NEWLINE';
":"						return 'REPEAT'
"_"						return 'PLACEHOLDER'
"|"{1,2}				return 'BAR'
[ABCDEFG]				return 'NOTE';
[\dmMajdisuab\d\+\-\#°ø]+			return 'MODIFIER';
"/"						return 'BASE';
"X"						return 'EMPTY';
"%"						return 'SAME';
"@"						return 'PART';
"("						return 'LEFT_PARAN';
")"						return 'RIGHT_PARAN';
[\w]+					return 'TEXT';
<<EOF>>               	return 'EOF';



/lex

%start main 

%% /* language grammar */

main
	: /* empty */
	| NEWLINE main
	| lines 						{ return $1 }
	;

lines
	: line NEWLINE lines 			{ $3.unshift($1); $$ = $3 } 
	| line NEWLINE EOF   		    { $$ = [$1] }
	| line EOF   					{ $$ = [$1] }
	;

line
	: measures  		
	;

measures	
	: BAR measures					{ $$ = $2 }
	| measure_repeat BAR measures 	{ $3.unshift($1); $$ = $3 }
	| measure_repeat BAR       		{ $$ = [$1] } 
	| measure_repeat        		{ $$ = [$1] } 
	;

measure_repeat
	: REPEAT measure_repeat	{ $2.repeatLeft = true; $$ = $2 }
	| measure_part REPEAT	{ $1.repeatRight = true; $$ = $1 }
	| measure_part
	;

measure_part
	: PART LEFT_PARAN NOTE RIGHT_PARAN measure { $5.part = $3; $$ = $5 }
	| measure
	;
	
measure
	: EMPTY					{ $$ = { empty: true } }
	| SAME					{ $$ = { same: true } }
	| chords				
		%{
			
			var total = 0;
			$1.chords.forEach(function(c) {
				total += c.duration
			});	
			$1.chords.forEach(function(c) {
				c.duration = c.duration * 4 / total;
			});	
			
			var count = $1.chords.length;
			var duration  = $1.chords[0].duration;
			var duration2  = 0;
			if (count == 1) {
            	$1.type = 1;
        	}
        	if (count == 2 && duration == 1) {
            	$1.type = 2;
        	}
        	if (count == 2 && duration == 2) {
            	$1.type = 3;
        	}
        	if (count == 2 && duration == 3) {
            	$1.type = 4;
        	}
        	if (count == 3) {
        	    duration2 = $1.chords[1].duration;
        	}
        	if (count == 3 && duration == 1 && duration2 == 1) {
             	$1.type = 5;
         	}
         	if (count == 3 && duration == 1 && duration2 == 2) {
              	$1.type = 6;
          	}
          	if (count == 3 && duration == 2) {
            	$1.type = 7;
        	}
        	if (count == 4) {
            	$1.type = 8;
        	}
		%}
	;
	
chords
	: chord chords			{ $2.chords.unshift( $1 ); $$ = $2 }
	| chord					{ $$ = { chords : [$1] } }
	;

chord
	: chord PLACEHOLDER		{ $1.duration ++; $$ = $1 }
	| chordname				{ $$ = { chord : $1, duration: 1} }
	;
	
chordname
	: NOTE MODIFIER BASE NOTE MODIFIER	{ $$ = {raw: $1 + $2 + $3 + $4 + $5, note: $1, note_modifier: $2, base_note: $4, base_note_modifier: $5} }
	| NOTE MODIFIER BASE NOTE 	{ $$ = {raw: $1 + $2 + $3 + $4, note: $1, note_modifier: $2, base_note: $4} }
	| NOTE MODIFIER				{ $$ = {raw: $1 + $2, note: $1, note_modifier: $2} }
	| NOTE BASE NOTE MODIFIER   { $$ = {raw: $1 + $2 + $3 + $4, note: $1, base_note: $3, base_note_modifier: $4} }
	| NOTE BASE NOTE		    { $$ = {raw: $1 + $2 + $3, note: $1, base_note: $3} }
	| NOTE 						{ $$ = {raw: $1, note: $1} }
	;

