import React from "react";
import { Helmet } from "react-helmet";
import logo from "../../assets/img/MagyarFlix.png";

function Meta() {
  return (
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>MagyarFlix</title>
      <meta
        name="description"
        content="Useful guide videos about Hungary: ruin pubs, traditional foods, drinks, turistics places, activities, curiosities, thermals and more."
      />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta
        itemProp="name"
        content="MagyarFlix: Your Number One Video Library About Hungary"
      />
      <meta
        itemProp="description"
        content="Useful guide videos about Hungary: ruin pubs, traditional foods, drinks, turistics places, activities, curiosities, thermals and more."
      />
      <meta itemProp="image" content={logo} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content="https://patriciadourado.com/magyarflix"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="MagyarFlix: Your Number One Video Library About Hungary"
      />
      <meta
        property="og:description"
        content="Useful guide videos about Hungary: ruin pubs, traditional foods, drinks, turistics places, activities, curiosities, thermals and more."
      />
      <meta property="og:image" content={logo} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="MagyarFlix: Your Number One Video Library About Hungary"
      />
      <meta
        name="twitter:description"
        content="Useful guide videos about Hungary: ruin pubs, traditional foods, drinks, turistics places, activities, curiosities, thermals and more."
      />
      <meta name="twitter:image" content={logo} />
    </Helmet>
  );
}

export default Meta;
