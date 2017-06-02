var path = require('path');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成HTML

var ROOT_PATH = path.resolve(_dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'app'); //根目录下面的app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, '/pxq/dist'); //发布文件存放的目录