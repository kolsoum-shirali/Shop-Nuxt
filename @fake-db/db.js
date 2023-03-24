import mock from "../@fake-db/mock";
import './jwt'
import '../@fake-db/data/home/amazingDiscount'
import '../@fake-db/data/home/eBooks'
import '../@fake-db/data/home/lastPeriods'
import '../@fake-db/data/home/blogs'
import '../@fake-db/data/home/blogSlider'
import '../@fake-db/data/home/teachers'
import '../@fake-db/data/home/courses'
import '../@fake-db/data/home/banner'
import '../@fake-db/data/blog/blogs'
import '../@fake-db/data/blog/mostView'
import '../@fake-db/data/category/category'
import '../@fake-db/data/category/realtimeSuggestion'
import '../@fake-db/data/category/sort'
import '../@fake-db/data/search/search'
import '../@fake-db/data/regions/province/province'
import '../@fake-db/data/regions/cities/cities'
import '../@fake-db/data/account/addresses/addresses'
import '../@fake-db/data/account/addresses/notify'
import '../@fake-db/data/account/user'
mock.onAny().passThrough()