# yaml-to-environ
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## 概要
セットアップ時などにcliから、jsonファイルを結合して保存する.
ex. 異なる二つのvscodeの設定ファイルなどを結合する
同じkeyが指定されている場合はlistで指定した後のものが優先される  
listに関しては結合される

## usage 

```bash
json-combine -f -o output.json -i file1.json file2.json
```


## help
```shell
Usage: json-combine [options]

Options:
  -V, --version                    output the version number
  -f --format                      need format?
  -o --output-file [fileName]      input file
  -i --input-files [fileNames...]  input file list
  -h, --help                       display help for command
```
