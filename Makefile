all:
	yarn build
	find dist -mindepth 1 -maxdepth 1 -not -path "*huayen*" -exec mv {} dist/huayen \;
	tar zcvf dist/huayen-front.tar.gz -C dist huayen
	scp dist/huayen-front.tar.gz aliyun:/tmp
