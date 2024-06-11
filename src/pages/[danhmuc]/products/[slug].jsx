import React from 'react';
import { useRouter } from 'next/router';

function BaiViet(props) {
  const router = useRouter();
  const { slug, danhmuc } = router.query;

  return (
    <div>
      Đây là bài viết {slug} thuộc danh mục {danhmuc}
    </div>
  );
}

export default BaiViet;