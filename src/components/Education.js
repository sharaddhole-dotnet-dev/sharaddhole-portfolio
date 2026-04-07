import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Master of Science (M.Sc.) — Computer Science</h3>
            <h4 className="text-sm text-muted-foreground">Kaviyatri Bahinabai Choudhary North Maharashtra University, Jalgaon, Maharashtra</h4>
            <p className="text-xs text-muted-foreground mt-1"> 2011 - 2013</p>
            <p className="mt-2"><strong>CGPA:</strong> 6.29 (Passed with first class)</p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Bachelor of Science (B.Sc.) — Computer Science</h3>
            <h4 className="text-sm text-muted-foreground">S.P.D.M. SMA Arts, Commerce and Science College, Shirpur, Maharashtra</h4>
            <p className="text-xs text-muted-foreground mt-1"> 2008 - 2011</p>
			<p className="mt-2"><strong>Percenatge:</strong> 76.17 (Passed with distinction)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;