'use strict';

var grid = require('../grid/grid.js');


test('oneMeasureOneChord', () => {
    var rows = grid.parse("A");

    expect(rows).toBeDefined();
    expect(rows.length).toBe(1)
    expect(rows[0].length).toBe(1)
    expect(rows[0][0].chords.length).toBe(1)
    expect(rows[0][0].chords[0].chord.raw).toBe("A")
    expect(rows[0][0].chords[0].duration).toBe(4)
});

test('oneMeasureSeveralChord', () => {
    var rows = grid.parse("A B");

    expect(rows).toBeDefined();
    expect(rows.length).toBe(1)
    expect(rows[0].length).toBe(1)
    expect(rows[0][0].chords.length).toBe(2)
    expect(rows[0][0].chords[0].chord.raw).toBe("A")
    expect(rows[0][0].chords[0].duration).toBe(2)
    expect(rows[0][0].chords[1].chord.raw).toBe("B")
    expect(rows[0][0].chords[1].duration).toBe(2)

})

test ('placeHolder', () => {
    var rows = grid.parse("A _");

    expect(rows).toBeDefined();
    expect(rows.length).toBe(1)
    expect(rows[0].length).toBe(1)
    expect(rows[0][0].chords.length).toBe(1)
    expect(rows[0][0].chords[0].chord.raw).toBe("A")
    expect(rows[0][0].chords[0].duration).toBe(4)
})

test('bar', () => {
    ["A", "|A", "A|", "|A|", "||A |"].forEach(function (g) {
        var rows = grid.parse(g);
        expect(rows).toBeDefined();
        expect(rows.length).toBe(1)
        expect(rows[0].length).toBe(1)
    });
})

test('barSeveralMeasure', () => {
    ["A | B", "|A | B", "A| B ", "|A|B|"].forEach(function (g) {
        var rows = grid.parse(g);
        expect(rows).toBeDefined();
        expect(rows.length).toBe(1)
        expect(rows[0].length).toBe(2)
    });
})

test('repeatLeft', () => {
    var rows = grid.parse("|: A ");

    expect(rows).toBeDefined();
    expect(rows.length).toBe(1)
    expect(rows[0].length).toBe(1)
    expect(rows[0][0].chords.length).toBe(1)
    expect(rows[0][0].chords[0].chord.raw).toBe("A")
    expect(rows[0][0].repeatLeft).toBeTruthy()
})

test('repeatRight', () => {
    var rows = grid.parse("A :|");

    expect(rows).toBeDefined();
    expect(rows.length).toBe(1)
    expect(rows[0].length).toBe(1)
    expect(rows[0][0].chords.length).toBe(1)
    expect(rows[0][0].chords[0].chord.raw).toBe("A")
    expect(rows[0][0].repeatRight).toBeTruthy()
})

test('part', () => {
    var rows = grid.parse("@(C) A");

    expect(rows).toBeDefined();
    expect(rows.length).toBe(1)
    expect(rows[0].length).toBe(1)
    expect(rows[0][0].chords.length).toBe(1)
    expect(rows[0][0].chords[0].chord.raw).toBe("A")
    expect(rows[0][0].part).toBe("C")
})

test('allChordNames', () => {
    ["A", "B", "C", "D", "E", "F", "G"].forEach(function (c) {
        var rows = grid.parse(c);
        expect(rows).toBeDefined();
        expect(rows[0][0].chords[0].chord.raw).toBe(c)
    });
})

test('allChordForm', () => {
    ["A", "A#", "Ab", "Am", "A-sus2", "A-sus4", "Aadd9", "Am6",
        "Am75b", "A-", "A+", "A75+", "Aø", "A°",
        "FmMaj7",
        "A/G", "A/G#", "A/Gb", "Am/G", "Am/G#", "Am/Gb"].forEach(function (c) {
        var rows = grid.parse(c);
        expect(rows).toBeDefined();
        expect(rows[0][0].chords[0].chord.raw).toBe(c)
    });
})

test('chordDetail', () => {
    var rows = grid.parse("Am/Gb");
    expect(rows).toBeDefined();
    expect(rows[0][0].chords[0].chord.raw).toBe("Am/Gb")
    expect(rows[0][0].chords[0].chord.note).toBe("A")
    expect(rows[0][0].chords[0].chord.note_modifier).toBe("m")
    expect(rows[0][0].chords[0].chord.base_note_modifier).toBe("b")

})

test('measureType', () => {
    [
        {grid: "A", type: 1},
        {grid: "A B _ _", type: 2},
        {grid: "A B", type: 3},
        {grid: "A _ _ B", type: 4},
        {grid: "A B C _", type: 5},
        {grid: "A B _ C", type: 6},
        {grid: "A _ B C", type: 7},
        {grid: "A B C D", type: 8},

    ].forEach(function (c) {
        let rows = grid.parse(c.grid);
        expect(rows).toBeDefined();
        expect(rows[0][0].type).toBe(c.type)
    })

})

test('severalLine', () => {
    let rows = grid.parse("A\nB");
    expect(rows).toBeDefined();
    expect(rows.length).toBe(2)

    expect(rows[0].length).toBe(1)
    expect(rows[0][0].chords.length).toBe(1)
    expect(rows[0][0].chords[0].chord.raw).toBe("A")
    expect(rows[0][0].chords[0].duration).toBe(4)

    expect(rows[1].length).toBe(1)
    expect(rows[1][0].chords.length).toBe(1)
    expect(rows[1][0].chords[0].chord.raw).toBe("B")
    expect(rows[1][0].chords[0].duration).toBe(4)

})

test('severalNewLine', () => {
    let rows = grid.parse("A\n\nB\nB");
    expect(rows).toBeDefined();
    expect(rows.length).toBe(3)
})

test('beginWithNewLine', () => {
    let rows = grid.parse("\nA\n\nB\nB");
    expect(rows).toBeDefined();
    expect(rows.length).toBe(3)

})

test('endWithNewLine', () => {
    let rows = grid.parse("A\n\nB\nB\n");
    expect(rows).toBeDefined();
    expect(rows.length).toBe(3)
})

test('errorMessage', () => {
    try {
        let rows = grid.parse("A B A R");
        expect(1).toBe(0);
    } catch (e) {
        //console.log(e.message.split("\n").slice(0,3).join("\n"));
        expect(1).toBe(1);
    }

})
