try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
      top.opener._$jscoverage.branchData = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
      top._$jscoverage.branchData = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    this._$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (! this._$jscoverage) {
  this._$jscoverage = {};
  this._$jscoverage.branchData = {};
}
if (! _$jscoverage['test-simple.js']) {
  _$jscoverage['test-simple.js'] = [];
  _$jscoverage['test-simple.js'][1] = 0;
  _$jscoverage['test-simple.js'][2] = 0;
  _$jscoverage['test-simple.js'][3] = 0;
}
_$jscoverage['test-simple.js'].source = ["var x, y;","x = 1;","y = x * 2;"];
_$jscoverage['test-simple.js'][1]++;
var x, y;
_$jscoverage['test-simple.js'][2]++;
x = 1;
_$jscoverage['test-simple.js'][3]++;
y = x * 2;
